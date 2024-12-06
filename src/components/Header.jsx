import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/wick-logoonly.svg";

const navigation = [
	{ name: "Home", href: "home" },
	{ name: "Download", href: "/download" },
	{ name: "Shop", href: "/shop" },
];

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="absolute inset-x-0 top-0 z-50">
			{/* Navbar */}
			<nav
				aria-label="Global"
				className="flex items-center justify-between bg-black shadow-md p-6 lg:px-8"
			>
				{/* Logo Section */}
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">WICK</span>
						<img
							alt="WICK Logo"
							src={logo}
							className="h-10 w-auto"
						/>
					</a>
				</div>

				{/* Mobile Menu Button */}
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#00FF41]"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="h-6 w-6" />
					</button>
				</div>

				{/* Desktop Menu */}
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-sm font-semibold text-[#00FF41] hover:text-white"
						>
							{item.name}
						</a>
					))}
				</div>

				{/* Login Button */}
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a
						href="/login"
						className="text-sm font-semibold text-[#00FF41] hover:text-white"
					>
						Log in <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>

			{/* Mobile Menu */}
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-50 bg-black opacity-75" />
				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#00FF41]">
					{/* Mobile Menu Header */}
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">WICK</span>
							<img
								alt="WICK Logo"
								src={logo}
								className="h-8 w-auto"
							/>
						</a>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-[#00FF41]"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>

					{/* Mobile Menu Links */}
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-[#00FF41]">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-[#00FF41] hover:bg-[#111]"
									>
										{item.name}
									</a>
								))}
							</div>
							<div className="py-6">
								<a
									href="/login"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-[#00FF41] hover:bg-[#111]"
								>
									Log in
								</a>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
};

export default Header;
