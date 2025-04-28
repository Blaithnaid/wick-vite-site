import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	CartesianGrid,
	PieChart,
	Pie,
	Cell,
} from "recharts";
import StatCard from "../components/StatCard";
import Header from "../components/Header";
import defaultProfilePic from "../assets/user-solid.svg"; // For now, using the default profile pic
import { useNavigate } from "react-router-dom"; // Import navigate for routing

const COLORS = ["#10b981", "#ef4444", "#6366f1", "#ec4899"];

const Profile = () => {
	const [stats, setStats] = useState({
		newFollowers: 2,
		unfollows: 0,
		posts: 3,
		likes: 5,
	});

	const [trends, setTrends] = useState({
		newFollowers: [],
		unfollows: [],
		posts: [],
		likes: [],
	});

	const [monthlyStats, setMonthlyStats] = useState({
		newFollowers: 2,
		unfollows: 0,
		posts: 3,
		likes: 5,
	});

	const [profilePic, setProfilePic] = useState(defaultProfilePic);
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("User");
	const [recentActivities, setRecentActivities] = useState([
		{ activity: "Liked your post", time: "2 hours ago" },
		{ activity: "Commented on your photo", time: "1 day ago" },
		{ activity: "Followed you", time: "3 days ago" },
	]);

	const navigate = useNavigate(); // Initialize navigate function for routing

	const statCards = [
		{
			title: "New Followers",
			value: stats.newFollowers,
			icon: "➕",
			color: "border-green-500",
			description: "In the last hour",
		},
		{
			title: "Unfollows",
			value: stats.unfollows,
			icon: "➖",
			color: "border-red-400",
			description: "In the last hour",
		},
		{
			title: "Posts",
			value: stats.posts,
			icon: "📝",
			color: "border-indigo-400",
			description: "Total posts",
		},
		{
			title: "Likes",
			value: stats.likes,
			icon: "❤",
			color: "border-pink-400",
			description: "Total likes",
		},
	];

	const chartData = [
		{ index: "W-1", newFollowers: 1, unfollows: 0, posts: 3, likes: 4 },
		{ index: "W-2", newFollowers: 2, unfollows: 0, posts: 3, likes: 5 },
	];
	
	const pieData = [
		{ name: "New Followers", value: monthlyStats.newFollowers },
		{ name: "Unfollows", value: monthlyStats.unfollows },
		{ name: "Posts", value: monthlyStats.posts },
		{ name: "Likes", value: monthlyStats.likes },
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-6 md:p-10">
			<Header />

			{/* Profile Section */}
			<motion.div
			
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center mb-12 mt-32 border border-gray-200"
			>
				<div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg mt-6">
					<strong>Coming Soon:</strong> Full Profile Customization! Soon you'll
					be able to update your profile picture, edit your display name, manage
					your bio, and personalize your public profile for others to see.
				</div>
				<img
					src={profilePic}
					alt="Profile"
					className="w-32 h-32 rounded-full mx-auto border-4 border-green-400 shadow-md mb-4 hover:scale-105 transition-transform duration-300"
				/>
				<h2 className="text-2xl font-bold text-gray-800">
					{email ? `${getGreeting()}, ${userName}!` : "Welcome"}
				</h2>
				<p className="text-gray-500 mt-2">To your profile dashboard.</p>

			

				
				<p className="text-gray-500 mt-4 max-w-2xl mx-auto">
					This upcoming feature will allow you to truly make your profile your
					own, showcase your achievements, and build your personal brand on the
					platform. Stay tuned!
				</p>

				
				
			</motion.div>

			{/* Profile Stats Title */}
			<h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
				Your Profile Stats
			</h1>

			{/* Weekly Growth Line Chart */}
			<div className="bg-white rounded-2xl shadow-lg p-6 mb-12 max-w-5xl mx-auto border border-gray-100">
				<h2 className="text-lg font-semibold text-gray-700 mb-4">
					Weekly Growth Overview
				</h2>
				<p className="text-center text-sm text-gray-400 mt-4">
				📅 Next update: Monday at 9:00 AM
				</p>

				<ResponsiveContainer width="100%" height={300}>
					<LineChart data={chartData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="index" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="newFollowers" stroke="#10b981" />
						<Line type="monotone" dataKey="unfollows" stroke="#ef4444" />
						<Line type="monotone" dataKey="posts" stroke="#6366f1" />
						<Line type="monotone" dataKey="likes" stroke="#ec4899" />
					</LineChart>
					
				</ResponsiveContainer>
			</div>

			{/* Stat Cards */}
				<div className="max-w-6xl mx-auto mb-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{statCards.map((card, idx) => (
					<motion.div
						key={idx}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.97 }}
						transition={{ type: "spring", stiffness: 300 }}
						className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-green-400 transition duration-300 flex flex-col items-center text-center"
					>
						<div className="text-4xl mb-3">{card.icon}</div>
						<h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
						<p className="text-3xl font-bold text-green-500 mt-2">{card.value}</p>
						<p className="text-gray-400 text-sm mt-1">{card.description}</p>
					</motion.div>
					))}
				</div>
				{/* Update Info */}
				<p className="text-center text-gray-400 text-sm mt-8">
					🔄 Updates every day at <span className="font-semibold text-gray-700">9:00 AM</span>
				</p>
				</div>



			{/* Pie Chart Section */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100 text-center"
			>
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					Monthly Summary Breakdown
				</h2>
				<p className="text-gray-500 mb-8 leading-relaxed max-w-2xl mx-auto">
					Here's a clear snapshot of your performance across the month. Each
					slice represents a major component of your social growth, from the
					new followers gained, to the number of posts shared, all the way to
					the engagement through likes and the inevitable unfollows. Use this
					monthly view to track your momentum and adjust your strategies moving
					forward.
				</p>

				{/* Pie Chart */}
				<div className="transition duration-300 hover:shadow-[0_0_30px_#34d399] rounded-full p-4">
					<ResponsiveContainer width="100%" height={300}>
						<PieChart>
							<Pie
								data={pieData}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								outerRadius={120}
								label
							>
								{pieData.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
							<Tooltip />
							<Legend />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</motion.div>
		</div>
	);
};

export default Profile;
