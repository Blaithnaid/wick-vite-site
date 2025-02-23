import React, { useState } from 'react';
import { motion } from 'framer-motion';
import youtubeImage from '../assets/youtube.png';
import facebookImage from '../assets/facebook.png';
import instagramImage from '../assets/insta.png';
import twitterImage from '../assets/x.png';
import twitchImage from '../assets/twitch.png';
import tiktokImage from '../assets/tiktok.png';

const Card = ({ imageSrc, title, shortDescription, fullDescription, onClick }) => {
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
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Text Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-700 line-clamp-2">{shortDescription}</p>
        {isHovered && (
          <button
            className="mt-2 flex items-center text-white bg-red-500 px-3 py-1 rounded-lg hover:bg-red-700 transition"
            onClick={onClick}
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
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-2">{cardContent.title}</h2>
        <p>{cardContent.fullDescription}</p>
        <img src={cardContent.imageSrc} alt={cardContent.title} className="w-full mt-4 rounded object-cover" />
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
      shortDescription: 'YouTube remains at the forefront of video content, with trends shifting towards short-form videos...',
      fullDescription:
        'YouTube remains at the forefront of video content, with trends shifting towards short-form videos, interactive live streams, and AI-generated content. The rise of YouTube Shorts has reshaped the platform, with creators focusing on bite-sized, engaging videos that capture audiences quickly. Long-form storytelling and niche content are also thriving, as viewers seek deeper engagement. Educational content, podcasts, and documentary-style videos are gaining traction, proving that audiences are interested in more than just quick entertainment.',
    },
    {
      imageSrc: facebookImage,
      title: 'Facebook Trends',
      shortDescription: 'Facebook continues to evolve as a platform for community engagement, with Groups playing a central role...',
      fullDescription:
        'Facebook continues to evolve as a platform for community engagement, with Groups playing a central role. Businesses and influencers are leveraging Facebook Groups to build tighter-knit communities and encourage discussions. Video content, particularly live streams, is also trending, with users increasingly engaging with real-time interactions. The push towards a more immersive experience, including virtual reality integrations, is expected to shape Facebook’s future.',
    },
    {
      imageSrc: instagramImage,
      title: 'Instagram Trends',
      shortDescription: 'Instagram is heavily dominated by Reels, with the platform prioritizing short, high-quality video content...',
      fullDescription:
        'Instagram is heavily dominated by Reels, with the platform prioritizing short, high-quality video content over traditional posts. Influencers and brands are investing in vertical video content to reach wider audiences through Instagram’s algorithm. Another trend is the rise of “casual posting,” where users share more unfiltered, authentic moments rather than curated, highly polished content. This shift is making Instagram feel more organic and less like a highlight reel.',
    },
    {
      imageSrc: twitterImage,
      title: 'X (Formerly Twitter) Trends',
      shortDescription: 'X has transformed into a real-time news and discussion hub, with an emphasis on longer-form content...',
      fullDescription:
        'X has transformed into a real-time news and discussion hub, with an emphasis on longer-form content through Threads. Users are engaging more in deep-dive discussions and thought leadership posts, making the platform a go-to for intellectual debates and breaking news. Monetization efforts are also taking center stage, with creators and influencers leveraging paid subscriptions and ad-revenue sharing. The shift towards exclusive content is keeping users engaged and offering new opportunities for content creators.',
    },
    {
      imageSrc: twitchImage,
      title: 'Twitch Trends',
      shortDescription: 'Twitch remains the leader in live streaming, with gaming content still dominating...',
      fullDescription:
        'Twitch remains the leader in live streaming, with gaming content still dominating. However, the “Just Chatting” category has skyrocketed, indicating that audiences enjoy interactive discussions and casual conversations just as much as gaming. The platform is also seeing a rise in niche communities, with streamers building dedicated follower bases around unique hobbies, ASMR, fitness, and even educational content. The emphasis on engagement and community-driven experiences makes Twitch stand out.',
    },
    {
      imageSrc: tiktokImage,
      title: 'TikTok Trends',
      shortDescription: 'TikTok continues to set trends across social media, with AI-driven recommendations pushing viral content...',
      fullDescription:
        'TikTok continues to set trends across social media, with AI-driven recommendations pushing viral content faster than ever. Short-form educational content is booming, with users enjoying bite-sized knowledge on various topics, from science to personal finance. Additionally, “duet” and “stitch” features are driving collaboration, allowing creators to interact with existing videos and make them go viral. The focus on music-driven trends and challenge-based content remains a key driver of TikTok’s continued success.',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 max-w-4xl mx-auto">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          {...card}
          onClick={() => {
            setSelectedCard(card);
            setModalOpen(true);
          }}
        />
      ))}
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
