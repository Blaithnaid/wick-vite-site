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
				<div className="mb-6 border-b border-gray-200">
					<nav className="flex -mb-px space-x-8">
						<button
							onClick={() => setActiveTab("profile")}
							className={`py-4 px-1 border-b-2 font-medium text-lg ${
								activeTab === "profile"
									? "border-lavender-400 text-lavender-600"
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
							}`}
						>
							Profile
						</button>
						<button
							onClick={() => setActiveTab("orders")}
							className={`py-4 px-1 border-b-2 font-medium text-lg ${
								activeTab === "orders"
									? "border-lavender-400 text-lavender-600"
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
							}`}
						>
							Orders
						</button>
						<button
							onClick={() => setActiveTab("addresses")}
							className={`py-4 px-1 border-b-2 font-medium text-lg ${
								activeTab === "addresses"
									? "border-lavender-400 text-lavender-600"
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
							}`}
						>
							Addresses
						</button>
						<button
							onClick={() => setActiveTab("payment")}
							className={`py-4 px-1 border-b-2 font-medium text-lg ${
								activeTab === "payment"
									? "border-lavender-400 text-lavender-600"
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
							}`}
						>
							Payment Methods
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
										defaultValue={
											currentUser?.phoneNumber || ""
										}
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

				{/* Orders Section */}
				{activeTab === "orders" && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold text-[#373F51] mb-6">
							Order History
						</h2>
						<div className="overflow-x-auto">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Order #
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Date
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Status
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Total
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Actions
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									<tr>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">
												#WK-10001
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">
												April 15, 2023
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
												Delivered
											</span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">
												$129.99
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
											<a href="#">View Details</a>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">
												#WK-10002
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">
												March 22, 2023
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
												Delivered
											</span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">
												$75.50
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
											<a href="#">View Details</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				)}

				{/* Addresses Section */}
				{activeTab === "addresses" && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-xl font-semibold text-[#373F51]">
								Your Addresses
							</h2>
							<button className="px-4 py-2 bg-lavender-400 text-white rounded-md hover:bg-lavender-500">
								Add New Address
							</button>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="border border-gray-200 rounded-lg p-4 relative">
								<div className="absolute top-2 right-2 flex space-x-2">
									<button className="text-gray-500 hover:text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
											/>
										</svg>
									</button>
									<button className="text-gray-500 hover:text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v10M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3M4 7h16"
											/>
										</svg>
									</button>
								</div>
								<div className="mb-2">
									<span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
										Default
									</span>
								</div>
								<h3 className="font-medium">Home</h3>
								<p className="text-gray-600 mt-1">John Doe</p>
								<p className="text-gray-600">123 Main Street</p>
								<p className="text-gray-600">Apt 4B</p>
								<p className="text-gray-600">
									New York, NY 10001
								</p>
								<p className="text-gray-600">United States</p>
								<p className="text-gray-600 mt-1">
									Phone: (555) 123-4567
								</p>
							</div>

							<div className="border border-gray-200 rounded-lg p-4 relative">
								<div className="absolute top-2 right-2 flex space-x-2">
									<button className="text-gray-500 hover:text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
											/>
										</svg>
									</button>
									<button className="text-gray-500 hover:text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v10M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3M4 7h16"
											/>
										</svg>
									</button>
								</div>
								<h3 className="font-medium">Work</h3>
								<p className="text-gray-600 mt-1">John Doe</p>
								<p className="text-gray-600">
									456 Business Ave
								</p>
								<p className="text-gray-600">Suite 100</p>
								<p className="text-gray-600">
									San Francisco, CA 94107
								</p>
								<p className="text-gray-600">United States</p>
								<p className="text-gray-600 mt-1">
									Phone: (555) 987-6543
								</p>
							</div>
						</div>
					</div>
				)}

				{/* Payment Methods Section */}
				{activeTab === "payment" && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-xl font-semibold text-[#373F51]">
								Payment Methods
							</h2>
							<button className="px-4 py-2 bg-lavender-400 text-white rounded-md hover:bg-lavender-500">
								Add Payment Method
							</button>
						</div>
						<div className="space-y-4">
							<div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
								<div className="flex items-center">
									<div className="bg-blue-100 p-2 rounded-md mr-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6 text-blue-600"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
											/>
										</svg>
									</div>
									<div>
										<div className="font-medium">
											Visa ending in 4242
										</div>
										<div className="text-sm text-gray-500">
											Expires 12/2025
										</div>
										<div className="text-sm text-blue-600 mt-1">
											Set as default
										</div>
									</div>
								</div>
								<div className="flex space-x-2">
									<button className="text-gray-500 hover:text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
											/>
										</svg>
									</button>
									<button className="text-gray-500 hover:text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v10M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3M4 7h16"
											/>
										</svg>
									</button>
								</div>
							</div>

							<div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
								<div className="flex items-center">
									<div className="bg-indigo-100 p-2 rounded-md mr-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6 text-indigo-600"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
											/>
										</svg>
									</div>
									<div>
										<div className="font-medium">
											Mastercard ending in 8888
										</div>
										<div className="text-sm text-gray-500">
											Expires 08/2024
										</div>
										<div className="text-sm text-blue-600 mt-1">
											Default payment method
										</div>
									</div>
								</div>
								<div className="flex space-x-2">
									<button className="text-gray-500 hover:text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
											/>
										</svg>
									</button>
									<button className="text-gray-500 hover:text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v10M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3M4 7h16"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Account;
