import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "/favicon.svg";
import defaultProfilePic from "../assets/user-solid.svg";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const navigation = [
	{ name: "Home", href: "/home" },
	{ name: "Shop", href: "/shop" },
];

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [profilePic, setProfilePic] = useState(defaultProfilePic);
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();

	// Update profile picture when user changes
	useEffect(() => {
		if (currentUser?.photoURL) {
			setProfilePic(currentUser.photoURL);
		}
	}, [currentUser]);

	// Handle profile picture change
	const handleProfilePicChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setProfilePic(reader.result);
				// Here you could upload to Firebase storage and update user profile
			};
			reader.readAsDataURL(file);
		}
	};

	// Handle logout
	const handleLogout = async () => {
		try {
			await logout();
			navigate("/home");
		} catch (error) {
			console.error("Failed to log out:", error);
		}
	};

	return (
		<header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
			<div className="w-full max-w-[1200px] mx-auto flex items-center justify-between py-2">
				<a
					className="p-4 rounded-lg text-white hover:cursor-pointer hover:text-gray-400 bg-lavender-400"
					type="button"
					href="http://localhost:8081"
				>
					Open App
				</a>
				<div className="flex-grow flex justify-center items-center space-x-12">
					<a
						href={navigation[0].href}
						className="text-xl text-lavender-400 font-bold hover:text-iguana-400 transition"
					>
						{navigation[0].name}
					</a>
					<img
						src={logo}
						alt="WICK Logo"
						className="h-24 py-2 w-auto transition-transform duration-300 hover:scale-110"
					/>
					<a
						href={navigation[1].href}
						className="text-xl text-lavender-400 font-bold hover:text-iguana-400 transition"
					>
						{navigation[1].name}
					</a>
				</div>

				{!currentUser ? (
					<div className="lg:flex flex-shrink-0">
						<a
							href="/login"
							className="w-32 h-12 flex items-center justify-center rounded-md text-sm font-semibold bg-lavender-400 hover:bg-iguana-400 text-white transition"
						>
							Log In
						</a>
					</div>
				) : (
					<div className="flex items-center space-x-2 relative">
						<div className="dropdown-container">
							<details className="dropdown">
								<summary className="avatar -mt-6">
									<img
										src={profilePic}
										alt="Profile"
										className="w-16 h-16 rounded-full border-2 border-lavender-400 hover:border-iguana-400 transition cursor-pointer"
									/>
								</summary>
								<div className="bg-white shadow-lg rounded-lg mt-2 text-black absolute top-full right-0 z-50 w-48">
									{/* Displaying the email here */}
									<li className="p-4">
										<p>
											<span className="block italic text-sm">
												{currentUser.email}
											</span>
										</p>
									</li>

									<a
										href="/account"
										className="block p-2 hover:bg-lavender-100"
									>
										Account
									</a>

									{/* Logout */}
									<a
										href="/"
										onClick={handleLogout}
										className="block p-2 hover:bg-lavender-100"
									>
										Log out
									</a>
								</div>
							</details>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
