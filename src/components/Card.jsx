import React, { useState } from 'react';
import { motion } from 'framer-motion';
import youtubeImage from '../assets/youtube.png';
import facebookImage from '../assets/facebook.png';
import instagramImage from '../assets/insta.png';
import twitterImage from '../assets/x.png';
import twitchImage from '../assets/twitch.png';
import tiktokImage from '../assets/tiktok.png';

const Card = ({ imageSrc, title, shortDescription, fullDescription, onReadMoreClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-72 h-auto rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="w-full h-48">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>

        {/* Short description */}
        <p className="text-sm text-gray-700 line-clamp-2">{shortDescription}</p>

        {/* "Read More" Button - Always visible when hovered */}
        {isHovered && (
          <button
            className="mt-2 flex items-center text-white bg-red-500 px-3 py-1 rounded-lg hover:bg-red-700 transition"
            onClick={onReadMoreClick}
          >
            Read More
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Modal = ({ isOpen, onClose, cardContent }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}  // Prevent clicking inside the modal from closing it
      >
        <h2 className="text-xl font-bold mb-2">{cardContent.title}</h2>
        <p>{cardContent.fullDescription}</p>
        <button
          className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardsData = [
    {
      imageSrc: youtubeImage,
      title: 'YouTube Trends',
      shortDescription: 'YouTube remains at the forefront of video content...',
      fullDescription:
        'YouTube remains at the forefront of video content, with trends shifting towards short-form videos, interactive live streams, and AI-generated content...',
    },
    {
      imageSrc: facebookImage,
      title: 'Facebook Trends',
      shortDescription: 'Facebook continues to evolve as a platform for community engagement...',
      fullDescription:
        'Facebook continues to evolve as a platform for community engagement, with Groups playing a central role...',
    },
    {
      imageSrc: instagramImage,
      title: 'Instagram Trends',
      shortDescription: 'Instagram is heavily dominated by Reels...',
      fullDescription:
        'Instagram is heavily dominated by Reels, with the platform prioritizing short, high-quality video content...',
    },
    {
      imageSrc: twitterImage,
      title: 'X (Formerly Twitter) Trends',
      shortDescription: 'X has transformed into a real-time news and discussion hub...',
      fullDescription:
        'X has transformed into a real-time news and discussion hub, with an emphasis on longer-form content through Threads...',
    },
    {
      imageSrc: twitchImage,
      title: 'Twitch Trends',
      shortDescription: 'Twitch remains the leader in live streaming...',
      fullDescription:
        'Twitch remains the leader in live streaming, with gaming content still dominating...',
    },
    {
      imageSrc: tiktokImage,
      title: 'TikTok Trends',
      shortDescription: 'TikTok continues to set trends across social media...',
      fullDescription:
        'TikTok continues to set trends across social media, with AI-driven recommendations pushing viral content...',
    },
  ];

  const handleReadMoreClick = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Trends</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            {...card}
            onReadMoreClick={() => handleReadMoreClick(card)}
          />
        ))}
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} cardContent={selectedCard || {}} />
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <CardGrid />
    </div>
  );
};

export default CardContainer;
