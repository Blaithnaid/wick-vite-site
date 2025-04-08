import React, { useEffect, useState } from "react";

const StatCard = ({ title, value, icon, color }) => (
	<div className={`p-6 rounded-2xl shadow-md bg-white flex items-center gap-4 border-l-8 ${color}`}>
		<div className="text-4xl">{icon}</div>
		<div>
			<h3 className="text-sm text-gray-500 uppercase tracking-wide">{title}</h3>
			<p className="text-2xl font-bold text-gray-800">{value}</p>
		</div>
	</div>
);

const Stats = () => {
	const [stats, setStats] = useState({
		users: 1289,
		orders: 743,
		revenue: "$23,940",
		serverStatus: "Online",
		liveUsers: 42,
		pageViews: 9841,
	});

	// Simulate stat updates
	useEffect(() => {
		const interval = setInterval(() => {
			setStats(prev => ({
				...prev,
				liveUsers: Math.floor(Math.random() * 100),
				pageViews: prev.pageViews + Math.floor(Math.random() * 10),
			}));
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="min-h-screen bg-gray-100 p-8">
			<h1 className="text-4xl font-bold mb-8 text-gray-800">📊 Live Dashboard</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<StatCard
					title="Total Users"
					value={stats.users}
					icon="👥"
					color="border-blue-500"
				/>
				<StatCard
					title="Orders Completed"
					value={stats.orders}
					icon="✅"
					color="border-green-500"
				/>
				<StatCard
					title="Revenue"
					value={stats.revenue}
					icon="💰"
					color="border-yellow-500"
				/>
				<StatCard
					title="Server Status"
					value={stats.serverStatus}
					icon={stats.serverStatus === "Online" ? "🟢" : "🔴"}
					color="border-purple-500"
				/>
				<StatCard
					title="Live Users"
					value={stats.liveUsers}
					icon="🔥"
					color="border-red-400"
				/>
				<StatCard
					title="Page Views"
					value={stats.pageViews}
					icon="📈"
					color="border-indigo-500"
				/>
			</div>
		</div>
	);
};

export default Stats;
