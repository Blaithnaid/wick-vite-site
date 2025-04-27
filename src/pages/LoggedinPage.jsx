import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useAuth } from "../contexts/AuthContext";

const LoggedinPage = () => {
	const location = useLocation();
	const { currentUser } = useAuth();
	const [userName, setUserName] = useState("");

	useEffect(() => {
		if (currentUser) {
			setUserName(currentUser.displayName || currentUser.email);
		}
	}, [currentUser]);

	return (
		<>
			<Header />
			<div className="min-h-screen h-full flex flex-col justify-center items-center px-4 py-32">
				<div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
					<div className="flex flex-col lg:flex-row">
						<div className="lg:w-1/2 bg-lavender-300 py-12 px-8 text-center text-[#FAF9F0]">
							<h1 className="text-4xl font-bold mb-4">
								Welcome to Wick
							</h1>
							<h2 className="text-xl mb-8">Hello {userName}</h2>
							<p className="mb-6">
								Thank you for joining our community. We're
								excited to have you here!
							</p>
							<p className="font-medium">
								Explore our features and discover what Wick has
								to offer.
							</p>
						</div>
						<div className="lg:w-1/2 py-12 px-8">
							<h3 className="text-2xl font-semibold text-[#373F51] mb-6">
								Getting Started
							</h3>
							<ul className="space-y-4">
								<li className="flex items-start">
									<div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6F6DB2] flex items-center justify-center text-white mr-3 mt-0.5">
										1
									</div>
									<div>
										<h4 className="font-medium text-[#373F51]">
											Complete your profile
										</h4>
										<p className="text-gray-600 mt-1">
											Add more information to your account
											to personalize your experience.
										</p>
									</div>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6F6DB2] flex items-center justify-center text-white mr-3 mt-0.5">
										2
									</div>
									<div>
										<h4 className="font-medium text-[#373F51]">
											Explore our shop
										</h4>
										<p className="text-gray-600 mt-1">
											Discover our latest products and
											shop with member benefits.
										</p>
									</div>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6F6DB2] flex items-center justify-center text-white mr-3 mt-0.5">
										3
									</div>
									<div>
										<h4 className="font-medium text-[#373F51]">
											Unlock premium features
										</h4>
										<p className="text-gray-600 mt-1">
											Upgrade your membership to access
											exclusive content and features.
										</p>
									</div>
								</li>
							</ul>
							<div className="mt-8 flex space-x-4">
								<a
									href="/account"
									className="block py-3 px-6 bg-[#6F6DB2] text-white rounded-lg hover:bg-opacity-90 transition"
								>
									My Account
								</a>
								<a
									href="/shop2"
									className="block py-3 px-6 bg-[#E6EDF3] text-[#373F51] rounded-lg hover:bg-opacity-90 transition"
								>
									Visit Shop
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoggedinPage;
