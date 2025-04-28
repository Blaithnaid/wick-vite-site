import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Asset imports
import youtubeImage from '../assets/logoYoutubefinal.png';
import facebookImage from '../assets/logofacebookfinal.png';
import instagramImage from '../assets/logoinstagramfinal.png';
import twitterImage from '../assets/logoxfinal.png';
import twitchImage from '../assets/logotwitchfinal.png';
import tiktokImage from '../assets/logotiktokfinal.png';

// Card Component
const Card = ({ imageSrc, title, shortDescription, fullDescription, onReadMoreClick, brandColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-72 h-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section with Overlay Gradient */}
      <div className="relative w-full h-48">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain p-6 bg-gradient-to-br from-gray-50 to-gray-100"
        />
        <div 
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"
          style={{ opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s' }}
        />
      </div>

      {/* Text Section */}
      <div className="p-4 flex flex-col h-[calc(100%-12rem)] justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2 text-center" style={{ color: brandColor }}>
            {title}
          </h2>
          <p className="text-sm text-gray-600 text-center line-clamp-3">
            {shortDescription}
          </p>
        </div>

        {/* "Read More" Button */}
        <div className="mt-4">
          <button
            className={`w-full flex items-center justify-center px-4 py-2 rounded-lg text-white font-semibold transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundColor: brandColor }}
            onClick={onReadMoreClick}
          >
            Read More
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Modal Component
const Modal = ({ isOpen, onClose, cardContent, brandColor }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl shadow-2xl max-w-lg w-full transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center mb-4">
          <img 
            src={cardContent.imageSrc} 
            alt={cardContent.title} 
            className="w-12 h-12 object-contain mr-4"
          />
          <h2 className="text-2xl font-bold" style={{ color: brandColor }}>
            {cardContent.title}
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">{cardContent.fullDescription}</p>
        <button
          className="px-6 py-2 rounded-lg text-white font-medium transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: brandColor }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
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
      shortDescription: 'YouTube remains at the forefront of video content, with trends shifting towards short-form videos and AI-generated content...',
      fullDescription: 'YouTube remains at the forefront of video content, with trends shifting towards short-form videos, interactive live streams, and AI-generated content. Creators are leveraging YouTube Shorts to compete with TikTok, while traditional long-form content continues to thrive in education, entertainment, and lifestyle niches.',
      brandColor: '#FF0000'
    },
    {
      imageSrc: facebookImage,
      title: 'Facebook Trends',
      shortDescription: 'Facebook continues to evolve as a platform for community engagement, with Groups playing a central role...',
      fullDescription: 'Facebook continues to evolve as a platform for community engagement, with Groups playing a central role. The platform has shifted focus to meaningful connections and community building, while expanding into virtual reality through Meta and maintaining its dominance in digital advertising.',
      brandColor: '#1877F2'
    },
    {
      imageSrc: instagramImage,
      title: 'Instagram Trends',
      shortDescription: 'Instagram is heavily dominated by Reels, with the platform prioritizing short, high-quality video content...',
      fullDescription: 'Instagram is heavily dominated by Reels, with the platform prioritizing short, high-quality video content. Shopping features have become more integrated, and creators are leveraging the platform for brand partnerships, while Stories remain a key engagement tool.',
      brandColor: '#E4405F'
    },
    {
      imageSrc: twitterImage,
      title: 'X (Formerly Twitter) Trends',
      shortDescription: 'X has transformed into a real-time news and discussion hub, with an emphasis on longer-form content...',
      fullDescription: 'X has transformed into a real-time news and discussion hub, with an emphasis on longer-form content through Threads. The platform continues to be crucial for breaking news, political discourse, and tech discussions, while adapting to new monetization models.',
      brandColor: '#000000'
    },
    {
      imageSrc: twitchImage,
      title: 'Twitch Trends',
      shortDescription: 'Twitch remains the leader in live streaming, with gaming content still dominating the platform...',
      fullDescription: 'Twitch remains the leader in live streaming, with gaming content still dominating. Just Chatting and IRL streams have gained significant traction. The platform has expanded into music, cooking, and educational content while maintaining its gaming-first identity.',
      brandColor: '#9146FF'
    },
    {
      imageSrc: tiktokImage,
      title: 'TikTok Trends',
      shortDescription: 'TikTok continues to set trends across social media, with AI-driven recommendations pushing viral content...',
      fullDescription: 'TikTok continues to set trends across social media, with AI-driven recommendations pushing viral content to massive audiences. The platform excels in music discovery, dance challenges, and short-form educational content, influencing culture worldwide.',
      brandColor: '#000000'
    },
  ];

  const handleReadMoreClick = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
        Social Media Trends 2024
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            {...card}
            onReadMoreClick={() => handleReadMoreClick(card)}
          />
        ))}
      </div>
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        cardContent={selectedCard || {}} 
        brandColor={selectedCard?.brandColor}
      />
    </div>
  );
};

// Card Container (Page Wrapper)
const CardContainer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <CardGrid />
    </div>
  );
};

export default CardContainer;
