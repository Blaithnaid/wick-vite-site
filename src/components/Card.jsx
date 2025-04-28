import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Asset imports
import youtubeImage from '../assets/logoyoutubefinal.png';
import facebookImage from '../assets/logofacebookfinal.png';
import instagramImage from '../assets/logoinstagramfinal.png';
import twitterImage from '../assets/logoxfinal.png';
import twitchImage from '../assets/logotwitchfinal.png';
import tiktokImage from '../assets/logotiktokfinal.png';

// Brand colors and custom background fixes
const platformColors = {
  YouTube: '#FF0000',
  Facebook: '#1877F2',
  Instagram: 'linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #515BD4 100%)',
  X: '#000000',
  Twitch: '#9146FF',
  TikTok: '#000000',
};

// Card Component
const Card = ({ imageSrc, title, shortDescription, fullDescription, onReadMoreClick, brandColor, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isInstagram = title.startsWith('Instagram');

  return (
    <motion.div
      className="relative w-72 h-[400px] rounded-xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-300"
      style={isInstagram ? { backgroundImage: platformColors.Instagram, backgroundSize: 'cover' } : { backgroundColor: brandColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Logo Section */}
      <div className="relative w-full h-48 flex items-center justify-center bg-white">
        <img
          src={imageSrc}
          alt={title}
          className="w-28 h-28 object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)] text-white">
        <div>
          <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
          <p className="text-sm text-center opacity-90 line-clamp-3">{shortDescription}</p>
        </div>

        {/* "Read More" Button that fades in */}
        <div className="mt-4 flex justify-center">
          <motion.button
            className="bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition"
            onClick={onReadMoreClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Read More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Modal Component
const Modal = ({ isOpen, onClose, cardContent }) => {
  if (!isOpen) return null;

  const brandKey = cardContent?.title.split(' ')[0];
  const brandColor = platformColors[brandKey] || '#333';

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        className="relative rounded-3xl shadow-2xl max-w-lg w-full text-white p-10"
        style={brandKey === 'Instagram'
          ? { backgroundImage: platformColors.Instagram, backgroundSize: 'cover' }
          : { backgroundColor: brandColor }}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Modal Content */}
        <div className="flex items-center mb-6">
          <img
            src={cardContent.imageSrc}
            alt={cardContent.title}
            className="w-14 h-14 object-contain mr-4"
          />
          <h2 className="text-3xl font-bold">{cardContent.title}</h2>
        </div>

        <p className="text-base leading-relaxed">{cardContent.fullDescription}</p>
      </motion.div>
    </div>
  );
};

// Card Grid Component
const CardGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardsData = [
    {
      imageSrc: youtubeImage,
      title: 'YouTube Trends',
      shortDescription: 'YouTube remains at the forefront of video content, with trends shifting towards short-form videos...',
      fullDescription: 'YouTube remains at the forefront of video content, with trends shifting towards short-form videos, interactive live streams, and AI-generated content. Creators are leveraging YouTube Shorts to compete with TikTok, while traditional long-form content continues to thrive in education, entertainment, and lifestyle niches.',
    },
    {
      imageSrc: facebookImage,
      title: 'Facebook Trends',
      shortDescription: 'Facebook continues to evolve as a platform for community engagement...',
      fullDescription: 'Facebook continues to evolve as a platform for community engagement, with Groups playing a central role. The platform has shifted focus to meaningful connections and community building, while expanding into virtual reality through Meta and maintaining its dominance in digital advertising.',
    },
    {
      imageSrc: instagramImage,
      title: 'Instagram Trends',
      shortDescription: 'Instagram is heavily dominated by Reels, prioritizing short, high-quality video content...',
      fullDescription: 'Instagram is heavily dominated by Reels, with the platform prioritizing short, high-quality video content. Shopping features have become more integrated, and creators are leveraging the platform for brand partnerships, while Stories remain a key engagement tool.',
    },
    {
      imageSrc: twitterImage,
      title: 'X (Formerly Twitter) Trends',
      shortDescription: 'X has transformed into a real-time news and discussion hub...',
      fullDescription: 'X has transformed into a real-time news and discussion hub, with an emphasis on longer-form content through Threads. The platform continues to be crucial for breaking news, political discourse, and tech discussions, while adapting to new monetization models.',
    },
    {
      imageSrc: twitchImage,
      title: 'Twitch Trends',
      shortDescription: 'Twitch remains the leader in live streaming...',
      fullDescription: 'Twitch remains the leader in live streaming, with gaming content still dominating. Just Chatting and IRL streams have gained significant traction. The platform has expanded into music, cooking, and educational content while maintaining its gaming-first identity.',
    },
    {
      imageSrc: tiktokImage,
      title: 'TikTok Trends',
      shortDescription: 'TikTok continues to set trends across social media...',
      fullDescription: 'TikTok continues to set trends across social media, with AI-driven recommendations pushing viral content to massive audiences. The platform excels in music discovery, dance challenges, and short-form educational content, influencing culture worldwide.',
    },
  ];

  const handleReadMoreClick = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <motion.h1
        className="text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-[#6F6DB2] via-[#6F6DB2] to-[#6F6DB2] bg-clip-text text-transparent animate-pulse"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Social Media Trends 2024 🚀
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            {...card}
            brandColor={platformColors[card.title.split(' ')[0]]}
            index={index}
            onReadMoreClick={() => handleReadMoreClick(card)}
          />
        ))}
      </div>

      <AnimatePresence>
        {modalOpen && (
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} cardContent={selectedCard} />
        )}
      </AnimatePresence>
    </div>
  );
};

// Card Container (Page Wrapper)
const CardContainer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <CardGrid />
    </div>
  );
};

export default CardContainer;
