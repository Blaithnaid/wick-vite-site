import React, { useEffect, useState } from "react"; 
import StatCard from "../components/StatCard"; // Correct import path
import Header2 from "../components/Header2"; // Importing the Header2 component

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

  // Simulate real-time changes
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        newFollowers: Math.floor(Math.random() * 200),
        unfollows: Math.floor(Math.random() * 50),
        storyViews: prev.storyViews + Math.floor(Math.random() * 100),
        clickThroughRate: (Math.random() * 5).toFixed(1) + "%",
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Including the Header2 component */}
      <Header2 />

      <h1 className="text-4xl font-bold text-gray-800 mb-12">📊 Social Media Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        <StatCard
          title="Total Followers"
          value={stats.totalFollowers.toLocaleString()}
          icon="👥"
          color="border-blue-500"
        />
        <StatCard
          title="New Followers"
          value={stats.newFollowers}
          icon="➕"
          color="border-green-500"
        />
        <StatCard
          title="Unfollows"
          value={stats.unfollows}
          icon="➖"
          color="border-red-400"
        />
        <StatCard
          title="Engagement Rate"
          value={stats.engagementRate}
          icon="📈"
          color="border-yellow-400"
        />
        <StatCard
          title="Posts This Week"
          value={stats.postsThisWeek}
          icon="📝"
          color="border-indigo-400"
        />
        <StatCard
          title="Story Views"
          value={stats.storyViews.toLocaleString()}
          icon="👁️"
          color="border-purple-500"
        />
        <StatCard
          title="Avg. Comments/Post"
          value={stats.avgComments}
          icon="💬"
          color="border-teal-400"
        />
        <StatCard
          title="Click-Through Rate"
          value={stats.clickThroughRate}
          icon="🔗"
          color="border-pink-400"
        />
        <StatCard
          title="Top Platform"
          value={stats.topPlatform}
          icon="⭐"
          color="border-amber-400"
        />
      </div>
    </div>
  );
};

export default Profile;
