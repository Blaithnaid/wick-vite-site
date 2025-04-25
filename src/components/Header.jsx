import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
	Bars3Icon,
	XMarkIcon,
	ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";
import logo from "/favicon.svg";

const navigation = [
	{ name: "Home", href: "/home" },
	{ name: "Shop", href: "/shop" },
];

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 w-full shadow-md bg-white z-50">
			<div className="w-full mx-auto flex items-center justify-between py-2 relative">
				<div className="flex-grow flex justify-center items-center space-x-12 relative">
					<a
						href={navigation[0].href}
						className="text-xl text-lavender-400 font-bold hover:text-iguana-400 transition"
					>
						{navigation[0].name}
					</a>
					<img
						src={logo}
						alt="WICK Logo"
						className="h-24 py-2 w-auto transition-transform duration-300 hover:scale-200"
					/>
					<a
						href={navigation[1].href}
						className="text-xl text-lavender-400 font-bold hover:text-iguana-400 transition"
					>
						{navigation[1].name}
					</a>
				</div>
				<div className="lg:flex flex-shrink-0 absolute md:right-7 right-2">
					<a
						href="/login"
						className="p-2 flex items-center justify-center rounded-md text-sm font-semibold bg-lavender-400 hover:bg-[] text-white hover:text-black transition"
					>
						<ArrowLeftEndOnRectangleIcon className="h-10 w-10" />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
