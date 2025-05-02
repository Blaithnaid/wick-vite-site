import React, { useState } from "react";
import Header from "../components/Header";
import Feature from "../pages/Feature";
import { useAuth } from "../contexts/AuthContext";

const Account = () => {
	const { currentUser } = useAuth();
	const [activeTab, setActiveTab] = useState("profile");

	return (
		<div className="w-full h-full bg-gray-200">
			<Header />
			<div className="min-h-screen pt-32 pb-16 px-4 max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold text-[#1F2937] my-8">My Account</h1>

				{/* Account Navigation Tabs */}
				<nav className="flex gap-4 mb-8">
					{["profile", "analytics"].map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`py-3 text-lg font-semibold rounded-full transition-all duration-300 ${
								activeTab === tab
									? "bg-gradient-to-r from-[#78C288] to-[#6F6DB2] text-white shadow-lg scale-105"
									: "bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-[#78C288] hover:to-[#6F6DB2] hover:text-white"
							}`}
						>
							{tab.charAt(0).toUpperCase() + tab.slice(1)}
						</button>
					))}
				</nav>

				{/* Profile Section */}
				{activeTab === "profile" && (
					<div className="bg-white p-8 rounded-2xl shadow-2xl">
						<h2 className="text-2xl font-semibold text-[#1F2937] mb-8 border-b pb-4">
							Personal Information
						</h2>
						<form className="space-y-10">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<div>
									<label
										htmlFor="firstName"
										className="block text-sm font-medium text-gray-600 mb-2"
									>
										First Name
									</label>
									<input
										type="text"
										id="firstName"
										className="w-full p-3 bg-gray-200 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#78C288] focus:border-transparent"
										defaultValue={currentUser?.displayName?.split(" ")[0] || ""}
									/>
								</div>
								<div>
									<label
										htmlFor="lastName"
										className="block text-sm font-medium text-gray-600 mb-2"
									>
										Last Name
									</label>
									<input
										type="text"
										id="lastName"
										className="w-full p-3 bg-gray-200 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#78C288] focus:border-transparent"
										defaultValue={currentUser?.displayName?.split(" ")[1] || ""}
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-600 mb-2"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										className="w-full p-3 bg-gray-200 text-black border border-gray-300 rounded-lg cursor-not-allowed focus:ring-0 focus:border-gray-300"
										defaultValue={currentUser?.email || ""}
										readOnly
									/>
								</div>
								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-600 mb-2"
									>
										Phone Number
									</label>
									<input
										type="tel"
										id="phone"
										className="w-full p-3 bg-gray-200 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#78C288] focus:border-transparent"
										defaultValue={currentUser?.phoneNumber || ""}
									/>
								</div>
							</div>

							<div className="flex justify-end">
								<button
									type="submit"
									className="px-8 py-3 bg-gradient-to-r from-[#78C288] to-[#6F6DB2] text-white rounded-full font-semibold shadow-md hover:scale-105 transition-all"
								>
									Save Changes
								</button>
							</div>
						</form>
					</div>
				)}

				{/* Analytics Section */}
				{activeTab === "analytics" && (
					<div className="bg-white p-8 rounded-2xl shadow-2xl">
						<h2 className="text-2xl font-semibold text-[#1F2937] mb-8 border-b pb-4">
							Analytics Overview
						</h2>
						<Feature />
					</div>
				)}
			</div>
		</div>
	);
};

export default Account;
