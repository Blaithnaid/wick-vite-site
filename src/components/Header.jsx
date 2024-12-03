import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	// the only routes we can use in this project are /home and /shop rn
	// the others have not been added as pages yet so they can't be used
	// we need to add .tsx files in the pages folder for them to work
	{ name: "Home", href: "/home" },
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
				className="flex items-center justify-between bg-[#78c288] shadow-md p-6 lg:px-8" // Matrix green background color
			>
				{/* Logo Section */}
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">WICK</span>
						<img
							alt="WICK Logo"
							src="./src/assets/wick-logoonly.svg"
							className="h-10 w-auto"
						/>
					</a>
				</div>

				{/* Mobile Menu Button */}
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
							className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
						>
							{item.name}
						</a>
					))}
				</div>

				{/* Login Button */}
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a
						href="#"
						className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
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
				<div className="fixed inset-0 z-50" />
				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					{/* Mobile Menu Header */}
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">WICK</span>
							<img
								alt="Logo"
								src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
								className="h-8 w-auto"
							/>
						</a>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>

					{/* Mobile Menu Links */}
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
									>
										{item.name}
									</a>
								))}
							</div>
							<div className="py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
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

const Card = ({ title, description, imgSrc }) => (
	<div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-[#78c288] hover:scale-105 transform transition-all duration-300">
		<img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
		<div className="p-6">
			<h3 className="text-lg font-semibold text-white">{title}</h3>
			<p className="mt-2 text-white/90">{description}</p>
		</div>
	</div>
);

const Layout = () => (
	<main className="mt-16 bg-[#78c288]">
		{/* Hero Section */}
		<section className="bg-gradient-to-r from-[#69bb7b] to-[#78c288] py-16 text-center">
			<h1 className="text-4xl font-bold text-white">Welcome to WICK</h1>
			<p className="mt-4 text-lg text-white/90">
				Explore the best features and platforms we offer.
			</p>
		</section>

		{/* Card Section */}
		<section className="container mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			<Card
				title="Feature 1"
				description="Explore the top-notch functionality."
				imgSrc=""
			/>
			<Card
				title="Feature 2"
				description="Innovative solutions for your needs."
				imgSrc=""
			/>
			<Card
				title="Feature 3"
				description="Seamless integration and usage."
				imgSrc=""
			/>
		</section>
	</main>
);

export default Header;
