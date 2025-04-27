"use client"; // Ensure client-side rendering works with React

import {
	UserCircleIcon,
	CloudArrowUpIcon,
	FingerPrintIcon,
	LockClosedIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
	{
		name: "User Management",
		description: "Manage user access and permissions seamlessly.",
		icon: UserCircleIcon,
		imageSrc: "https://picsum.photos/400/400?random=1",
	},
	{
		name: "Cloud Storage",
		description: "Securely store and access your files from anywhere.",
		icon: CloudArrowUpIcon,
		imageSrc: "https://picsum.photos/400/400?random=2",
	},
	{
		name: "Enhanced Security",
		description: "Advanced encryption to protect your data.",
		icon: FingerPrintIcon,
		imageSrc: "https://picsum.photos/400/400?random=3",
	},
	{
		name: "Data Privacy",
		description: "Your data is safe and never shared without consent.",
		icon: LockClosedIcon,
		imageSrc: "https://picsum.photos/400/400?random=4",
	},
];

const Card = ({ title, description, imgSrc }) => (
	<div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-[#1B1B1B] hover:scale-105 transform transition-all duration-300">
		<img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
		<div className="p-6">
			<h3 className="text-lg font-semibold text-[#FFFFFF]">{title}</h3>
			<p className="mt-2 text-[#6F6DB2]">{description}</p>
		</div>
	</div>
);

const Hero = () => {
	return (
		<div className="w-full h-full">
			{/* Hero Section */}
			<div className="relative flex items-center justify-center min-h-screen w-full text-center">
				<iframe
					src="https://www.youtube.com/embed/SG03JXX1t1I?autoplay=1&mute=1&loop=1&playlist=SG03JXX1t1I"
					className="absolute inset-0 w-full h-full object-cover -z-10 blur-sm"
					frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen
					title="YouTube background"
				/>
				<div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
				<div className="w-full text-white px-0">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
					>
						<h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
							Social Media, Simplified.
						</h1>
						<p className="mt-8 text-lg font-medium sm:text-xl">
							Wick brings all of your platforms into one place, making it easier
							than ever to manage your social media presence.
						</p>
					</motion.div>
				</div>
			</div>
			<Features />
		</div>
	);
};

const Features = () => {
	return (
		<div className="bg-[#6F6DB2] py-24 sm:py-32 w-full">
			<div className="w-full">
				<div className="text-center">
					<h2 className="text-base font-semibold text-[#FFFFFF]">
						Empower Your Workflow
					</h2>
					<p className="mt-2 text-4xl font-bold tracking-tight text-[#FFFFFF] sm:text-5xl">
						Features Tailored for Your Success
					</p>
					<p className="mt-6 text-lg text-[#FFFFFF]/90">
						Streamline your processes with tools designed to simplify and
						enhance every aspect of your work.
					</p>
				</div>

				{/* Features Grid */}
				<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
					{features.map((feature) => (
						<div
							key={feature.name}
							className="flex flex-col items-center text-center"
						>
							<div className="transition-transform duration-300 ease-in-out transform hover:scale-110">
								<feature.icon
									className="h-12 w-12 text-black hover:text-[#78C288]"
									aria-hidden="true"
								/>
							</div>
							<h3 className="mt-4 text-xl font-bold text-[#1B1B1B]">
								{feature.name}
							</h3>
							<p className="mt-2 text-base text-[#1B1B1B]/80">
								{feature.description}
							</p>
						</div>
					))}
				</div>

				{/* New Features Announcement */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="mt-24 text-center"
				>
					<h3 className="text-3xl font-extrabold text-white mb-6">
					  New Features Dropping Soon!
					</h3>
					<p className="text-lg text-white/80 mb-8">
						We're working on exciting updates to supercharge your experience.
						Stay tuned!
					</p>
					<a href="/feature" className="inline-block">
						<button className="bg-white text-[#6F6DB2] font-semibold px-6 py-3 rounded-full hover:bg-[#78C288] hover:text-white transition-all duration-300">
							See Upcoming Features
						</button>
					</a>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
