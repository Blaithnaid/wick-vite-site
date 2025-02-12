import React, { useState } from 'react';

// Card component
const Card = ({ imageSrc, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    cta: {
      height: '450px',
      width: '300px',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '25%', // Rounded corners for the card
      boxShadow: isHovered ? '0 4px 20px rgba(111, 109, 178, 0.7)' : 'none', // Under-glow effect
      transition: 'all 0.3s ease-in-out', // Smooth transition for hover effect
    },
    img: {
      position: 'absolute',
      top: '-10%', // Changed this to -10% to make the image come down
      left: '50%',
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Ensures the image covers the area without distortion
      transform: 'translateX(-50%)', // Centers the image horizontally
      transition: '0.5s ease-in-out',
    },
    text: {
      position: 'absolute',
      bottom: '-40%',
      left: '15px',
      right: '15px',
      padding: '15px',
      transition: '0.5s ease-in-out',
      color: '#78C288', // Text color change
      zIndex: 2, // Ensure text appears above the image when hovered
    },
    h2: {
      color: '#78C288', // Title color
      display: 'inline-block',
      fontWeight: 300,
      marginBottom: '5px',
    },
    p: {
      color: '#78C288', // Description color
      fontWeight: 300,
    },
    ctaHovered: {
      img: {
        top: isHovered ? '-20%' : '-10%', // Move the image further down when hovered
        filter: isHovered ? 'brightness(70%)' : 'brightness(100%)',
      },
      text: {
        bottom: isHovered ? '0' : '-40%', // Moves the text into view on hover
      },
    },
  };

  return (
    <div
      style={styles.cta}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageSrc}
        alt="CTA Image"
        style={{
          ...styles.img,
          ...styles.ctaHovered.img,
        }}
      />
      <div
        style={{
          ...styles.text,
          ...styles.ctaHovered.text,
        }}
      >
        <h2 style={styles.h2}>{title}</h2>
        <p style={styles.p}>{description}</p>
      </div>
    </div>
  );
};

// Grid component to render multiple cards
const CardGrid = () => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',  // 3 cards per row
    gap: '20px',  // Space between cards
    justifyItems: 'center',  // Center cards horizontally
    alignItems: 'center',    // Center cards vertically
    width: '100%',
    maxWidth: '1200px',
  };

  // Data for the cards
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
  

  return (
    <div style={gridStyle}>
      {/* Dynamically render the cards */}
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

// Container component to center the cards on the screen
const CardContainer = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',     // Center vertically
    height: '100vh',          // Full viewport height
  };

  return (
    <div style={containerStyle}>
      <CardGrid />
    </div>
  );
};

export default CardContainer;
