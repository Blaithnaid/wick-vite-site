import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "/favicon.svg";

const navigation = [
	{ name: "Home", href: "/home2" },
	{ name: "Shop", href: "/shop2" },
	{ name: "Account", href: "/account" },
];

const Header2 = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
			<div className="w-full max-w-[1200px] mx-auto flex items-center justify-between py-2 px-4">
				{/* Mobile Menu Button */}
				<div className="lg:hidden text-black h-12 w-12 flex justify-center items-center">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
					>
						<Bars3Icon className="h-6 w-6" />
					</button>
				</div>

				{/* Center Logo and Navigation */}
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
					<a
						href={navigation[2].href}
						className="text-xl text-lavender-400 font-bold hover:text-iguana-400 transition"
					>
						{navigation[2].name}
					</a>
				</div>

				{/* Sign Out Button */}
				<div className="lg:flex flex-shrink-0">
					<a
						href="/home"
						className="w-32 h-12 flex items-center justify-center rounded-md text-sm font-semibold bg-lavender-400 text-white hover:bg-iguana-400 hover:text-black transition"
					>
						Sign Out
					</a>
				</div>
			</div>

			{/* Mobile Menu Dialog */}
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-40 bg-black opacity-75" />
				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#1B1B1B] p-6 shadow-lg">
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
						<a
							href="/logout"
							className="block text-lg text-white bg-lavender-400 px-4 py-2 rounded-full text-center hover:bg-iguana-400 transition"
						>
							Sign Out
						</a>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
};

export default Header2;
