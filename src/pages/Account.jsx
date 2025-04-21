import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StatCard from "../components/StatCard";
import Header2 from "../components/Header2";

const Profile = () => {
  const [stats, setStats] = useState({
    totalFollowers: 35890,
    newFollowers: 142,
    unfollows: 23,
    engagementRate: "6.2%",
    postsThisWeek: 12,
    storyViews: 3012,
    avgComments: 47,
    clickThroughRate: "3.4%",
    topPlatform: "Instagram",
  });

  const [trends, setTrends] = useState({
    newFollowers: [],
    unfollows: [],
    storyViews: [],
    clickThroughRate: [],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => {
        const newNewFollowers = Math.floor(Math.random() * 200);
        const newUnfollows = Math.floor(Math.random() * 50);
        const newStoryViews = prev.storyViews + Math.floor(Math.random() * 100);
        const newCTR = (Math.random() * 5).toFixed(1) + "%";

        setTrends((prevTrends) => ({
          newFollowers: [...prevTrends.newFollowers.slice(-9), newNewFollowers],
          unfollows: [...prevTrends.unfollows.slice(-9), newUnfollows],
          storyViews: [...prevTrends.storyViews.slice(-9), newStoryViews],
          clickThroughRate: [
            ...prevTrends.clickThroughRate.slice(-9),
            parseFloat(newCTR),
          ],
        }));

        return {
          ...prev,
          newFollowers: newNewFollowers,
          unfollows: newUnfollows,
          storyViews: newStoryViews,
          clickThroughRate: newCTR,
        };
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const statCards = [
    {
      title: "Total Followers",
      value: stats.totalFollowers.toLocaleString(),
      icon: "👥",
      color: "border-blue-500",
      description: "All-time followers",
    },
    {
      title: "New Followers",
      value: stats.newFollowers,
      icon: "➕",
      color: "border-green-500",
      description: "In the last hour",
      trendData: trends.newFollowers,
    },
    {
      title: "Unfollows",
      value: stats.unfollows,
      icon: "➖",
      color: "border-red-400",
      description: "In the last hour",
      trendData: trends.unfollows,
    },
    {
      title: "Engagement Rate",
      value: stats.engagementRate,
      icon: "📈",
      color: "border-yellow-400",
      description: "Avg. per post",
    },
    {
      title: "Posts This Week",
      value: stats.postsThisWeek,
      icon: "📝",
      color: "border-indigo-400",
      description: "This week’s total",
    },
    {
      title: "Story Views",
      value: stats.storyViews.toLocaleString(),
      icon: "👁️",
      color: "border-purple-500",
      description: "Cumulative total",
      trendData: trends.storyViews,
    },
    {
      title: "Avg. Comments/Post",
      value: stats.avgComments,
      icon: "💬",
      color: "border-teal-400",
      description: "Last 7 posts",
    },
    {
      title: "Click-Through Rate",
      value: stats.clickThroughRate,
      icon: "🔗",
      color: "border-pink-400",
      description: "Link click %",
      trendData: trends.clickThroughRate,
    },
    {
      title: "Top Platform",
      value: stats.topPlatform,
      icon: "⭐",
      color: "border-amber-400",
      description: "Most engaged",
    },
  ];

  const handleCardClick = (title) => {
    alert(`Clicked on: ${title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-10">
      <Header2 />
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        📊 Social Media Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {statCards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => handleCardClick(card.title)}
            className="cursor-pointer"
          >
            <StatCard
              title={card.title}
              value={card.value}
              icon={card.icon}
              color={card.color}
              description={card.description}
              trendData={card.trendData}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
