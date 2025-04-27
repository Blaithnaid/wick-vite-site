import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "/favicon.svg";
import defaultProfilePic from "../assets/defaultProfile.jpg";
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
				<div className="lg:hidden text-black h-12 w-12 flex justify-center items-center">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
					>
						<Bars3Icon className="h-6 w-6" />
					</button>
				</div>
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

				{/* Conditional rendering - show login button or profile pic */}
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
								<summary className="avatar">
									<img
										src={profilePic}
										alt="Profile"
										className="w-16 h-16 rounded-full border-2 border-lavender-400 hover:border-iguana-400 transition cursor-pointer"
									/>
								</summary>
								<ul className="bg-white shadow-lg rounded-lg mt-2 text-black absolute top-full right-0 z-50 w-48">
									{/* Displaying the email here */}
									<li className="p-4">
										<p>
											<span className="block italic text-sm">
												{currentUser.email}
											</span>
										</p>
									</li>

									{/* Profile Picture Upload Option */}
									<li className="p-2">
										<label
											htmlFor="uploadProfilePic"
											className="block text-sm text-gray-700 cursor-pointer"
										>
											Change Profile Picture
											<input
												type="file"
												id="uploadProfilePic"
												accept="image/*"
												onChange={
													handleProfilePicChange
												}
												className="hidden"
											/>
										</label>
									</li>

									{/* Account Link */}
									<li>
										<a
											href="/account"
											className="block p-2 hover:bg-lavender-100"
										>
											Account
										</a>
									</li>

									{/* Divider */}
									<li className="divider my-2"></li>

									{/* Logout */}
									<li>
										<button
											onClick={handleLogout}
											className="block w-full text-left p-2 hover:bg-lavender-100"
										>
											Logout
										</button>
									</li>
								</ul>
							</details>
						</div>
					</div>
				)}
			</div>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-40 bg-black opacity-75" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#1B1B1B] p-6 shadow-lg">
					<div className="flex items-center justify-between">
						<img src={logo} alt="Logo" className="h-8 w-auto" />
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="text-white"
						>
							<XMarkIcon className="h-6 w-6" />
						</button>
					</div>
					<div className="mt-6 space-y-4">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="block text-lg text-iguana-400 hover:text-lavender-400 transition"
							>
								{item.name}
							</a>
						))}

						{!currentUser ? (
							<a
								href="/login"
								className="block text-lg text-white bg-lavender-400 px-4 py-2 rounded-full text-center hover:bg-iguana-400 transition"
							>
								Log In
							</a>
						) : (
							<>
								<a
									href="/account"
									className="block text-lg text-white bg-lavender-400 px-4 py-2 rounded-full text-center hover:bg-iguana-400 transition"
								>
									Account
								</a>
								<button
									onClick={handleLogout}
									className="block w-full text-lg text-white bg-lavender-400 px-4 py-2 rounded-full text-center hover:bg-iguana-400 transition"
								>
									Logout
								</button>
							</>
						)}
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
};

export default Header;
