import React, { useState } from 'react';

// Card component
const Card = ({ imageSrc, title, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    cta: {
      height: '350px',
      width: '280px',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '15px',
      backgroundImage: `url(${imageSrc})`,
      backgroundSize: 'cover',  // Ensures the image covers the area
      backgroundPosition: 'center',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'all 0.4s ease-in-out',
      transform: isHovered ? 'scale(1.05) rotate(5deg)' : 'scale(1) rotate(0deg)', // 3D rotation on hover
      boxShadow: isHovered
        ? '0 20px 40px rgba(111, 109, 178, 0.8), 0 20px 60px rgba(255, 0, 0, 0.3)' // Dynamic glow effect
        : '0 10px 20px rgba(0, 0, 0, 0.1)',
    },
    text: {
      position: 'absolute',
      bottom: '10px',
      left: '20px',
      right: '20px',
      padding: '15px',
      color: '#fff',
      zIndex: 2,
      opacity: isHovered ? '1' : '0', // Fade in text on hover
      transform: isHovered ? 'translateY(0)' : 'translateY(20px)', // Slide in text from bottom
      transition: 'all 0.4s ease-in-out',
    },
    h2: {
      color: '#fff', // White title color
      fontWeight: 'bold',
      fontSize: '1.5rem',
      textTransform: 'uppercase',
      marginBottom: '10px',
      letterSpacing: '2px',
      textShadow: '0 0 5px rgba(255, 255, 255, 0.5)', // Subtle glow effect
    },
  };

  return (
    <div
      style={styles.cta}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div style={styles.text}>
        <h2 style={styles.h2}>{title}</h2>
      </div>
    </div>
  );
};

// Modal Popup Component
const Modal = ({ isOpen, onClose, cardContent }) => {
  if (!isOpen) return null;

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    maxWidth: '600px',
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 999,
      }}
      onClick={onClose}
    >
      <div
        style={modalStyle}
        onClick={(e) => e.stopPropagation()} // Prevent clicking on modal content from closing the modal
      >
        <h2>{cardContent.title}</h2>
        <p>{cardContent.description}</p>
        <img
          src={cardContent.imageSrc}
          alt={cardContent.title}
          style={{ width: '60%', borderRadius: '10px', marginTop: '20px' }}
        />
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#78C288',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

// CardGrid component
const CardGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',  // Grid with equal width cards
    gap: '20px',
    justifyItems: 'center',
    alignItems: 'center',
    padding: '40px',
    maxWidth: '1200px',
  };

  const cardsData = [
    {
      imageSrc: '/src/assets/youtube.jpg',
      title: 'YouTube Trends',
      description: 'Explore the latest video content and trends that are dominating YouTube, from viral challenges to emerging creators.',
    },
    {
      imageSrc: 'https://images.pexels.com/photos/716150/pexels-photo-716150.jpeg',
      title: 'X (Formerly Twitter) Trends',
      description: 'Stay updated with trending topics, hashtags, and news on X as users continue to engage in global conversations.',
    },
    {
      imageSrc: 'https://images.pexels.com/photos/1092641/pexels-photo-1092641.jpeg',
      title: 'Facebook Trends',
      description: 'Discover popular pages, groups, and discussions on Facebook, where trends continue to shape social media engagement.',
    },
    {
      imageSrc: 'https://images.pexels.com/photos/6693649/pexels-photo-6693649.jpeg',
      title: 'Instagram Trends',
      description: 'Check out the latest trends on Instagram, from fashion influencers to viral memes and stories that capture the attention of millions.',
    },
    {
      imageSrc: 'https://images.pexels.com/photos/713340/pexels-photo-713340.jpeg',
      title: 'Twitch Trends',
      description: 'Follow the hottest gaming and live streaming trends on Twitch, where gamers and creators are pushing the boundaries of live content.',
    },
    {
      imageSrc: 'https://images.pexels.com/photos/7706357/pexels-photo-7706357.jpeg',
      title: 'TikTok Trends',
      description: 'Dive into the ever-evolving TikTok trends, from viral dance challenges to creative short-form videos that keep users entertained.',
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div>
      <div style={gridStyle}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            onClick={() => handleCardClick(card)} // Handle card click to show modal
          />
        ))}
      </div>

      {/* Modal component */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        cardContent={selectedCard || {}}
      />
    </div>
  );
};

// Container component to center the cards on the screen
const CardContainer = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#FFFFFF', // Light gray background for the container
  };

  return (
    <div style={containerStyle}>
      <CardGrid />
    </div>
  );
};

export default CardContainer;
