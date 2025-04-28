import React, { useState } from "react";
import Header from "../components/Header";
import { useAuth } from "../contexts/AuthContext";

const Account = () => {
	const { currentUser } = useAuth();
	const [activeTab, setActiveTab] = useState("profile");

	return (
		<>
			<Header />
			<div className="min-h-screen pt-32 pb-16 px-4 max-w-6xl mx-auto">
				<h1 className="text-3xl font-bold text-[#373F51] mb-8">
					My Account
				</h1>

				{/* Account Navigation Tabs */}
			{/* Account Navigation Tabs */}
			<div className="mb-6 border-b border-gray-200">
				<nav className="flex space-x-8">
					<button
						onClick={() => setActiveTab("profile")}
						className={`py-3 px-6 text-lg font-semibold rounded-full transition duration-300 ease-in-out transform ${
							activeTab === "profile"
								? "bg-gradient-to-r from-[#78C288] to-[#6F6DB2] text-white shadow-lg"
								: "bg-transparent text-gray-600 border-2 border-transparent hover:bg-gradient-to-r hover:from-[#78C288] hover:to-[#6F6DB2] hover:text-white hover:border-transparent"
						}`}
					>
						Profile
					</button>

					<button
						onClick={() => setActiveTab("analytics")}
						className={`py-3 px-6 text-lg font-semibold rounded-full transition duration-300 ease-in-out transform ${
							activeTab === "analytics"
								? "bg-gradient-to-r from-[#78C288] to-[#6F6DB2] text-white shadow-lg"
								: "bg-transparent text-gray-600 border-2 border-transparent hover:bg-gradient-to-r hover:from-[#78C288] hover:to-[#6F6DB2] hover:text-white hover:border-transparent"
						}`}
					>
						Analytics
					</button>
				</nav>
			</div>



				{/* Profile Section */}
				{activeTab === "profile" && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold text-[#373F51] mb-6">
							Personal Information
						</h2>
						<form className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="firstName"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										First Name
									</label>
									<input
										type="text"
										id="firstName"
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
										defaultValue={
											currentUser?.displayName?.split(
												" "
											)[0] || ""
										}
									/>
								</div>
								<div>
									<label
										htmlFor="lastName"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Last Name
									</label>
									<input
										type="text"
										id="lastName"
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
										defaultValue={
											currentUser?.displayName?.split(
												" "
											)[1] || ""
										}
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
										defaultValue={currentUser?.email || ""}
										readOnly
									/>
								</div>
								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Phone Number
									</label>
									<input
										type="tel"
										id="phone"
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
										defaultValue={currentUser?.phoneNumber || ""}
									/>
								</div>
							</div>

							<div>
								<h3 className="text-lg font-medium text-[#373F51] mb-3 mt-6">
									Change Password
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="currentPassword"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Current Password
										</label>
										<input
											type="password"
											id="currentPassword"
											className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
										/>
									</div>
									<div>
										<label
											htmlFor="newPassword"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											New Password
										</label>
										<input
											type="password"
											id="newPassword"
											className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
										/>
									</div>
									<div>
										<label
											htmlFor="confirmPassword"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Confirm New Password
										</label>
										<input
											type="password"
											id="confirmPassword"
											className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
										/>
									</div>
								</div>
							</div>

							<div className="flex justify-end">
								<button
									type="submit"
									className="px-6 py-2 bg-lavender-400 text-white rounded-md hover:bg-lavender-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lavender-500"
								>
									Save Changes
								</button>
							</div>
						</form>
					</div>
				)}

				{/* Analytics Section */}
				{activeTab === "analytics" && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold text-[#373F51] mb-6">
							Analytics Overview
						</h2>
						{/* Replace this with your actual analytics data */}
						<p className="text-gray-700">Here are some key statistics about your account...</p>
					</div>
				)}
			</div>
		</>
	);
};

export default Account;
