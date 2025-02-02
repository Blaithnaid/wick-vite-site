"use client"; 

import { useEffect } from "react";
import Header from "./Header";
import appSync from "../assets/app-sync.png";

const Card = ({ title, description, imgSrc }) => (
	<div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-[#1B1B1B] hover:scale-105 transform transition-all duration-300">
		<img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
		<div className="p-6">
			<h3 className="text-lg font-semibold text-[#FFFFFF]">{title}</h3>
			<p className="mt-2 text-[#6F6DB2]">{description}</p> {/* Dusty Lavender */}
		</div>
	</div>
);

const Hero = () => {
	return (
		<div className="bg-[#FFFFFF] h-full w-full"> {/* Eerie Black */}
			{/* Hero Section */}
			<div className="relative isolate px-6 pt-14 lg:px-8">
				{/* Background Gradient */}
				<div
					aria-hidden="true"
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				>
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#78C288] to-[#6F6DB2] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" // Iguana Green to Dusty Lavender
					/>
				</div>

				<div className="mx-auto max-w-[1200px] py-32 sm:py-48 lg:py-56 text-center fade-in-animation">
					<style>
						{`
					@keyframes fadeIn {
						from {
						opacity: 0;
						transform: translateY(20px); /* Slight slide-up effect */
						}
						to {
						opacity: 1;
						transform: translateY(0); /* Reset position */
						}
					}

					.fade-in-animation {
						animation: fadeIn 1.5s ease-in-out; /* Duration and easing for smooth fade */
						animation-delay: 0.2s; /* Optional: Delay to control timing */
						animation-fill-mode: both; /* Ensures the animation state is retained */
					}
					`}
					</style>

					{/* Text Content */}
					<h1 className="text-balance text-5xl font-bold tracking-tight text-[#6F6DB2] sm:text-7xl"> {/* Snow */}
						Social Media, Simplified.
					</h1>
					<p className="mt-8 text-lg font-medium text-[#6F6DB2] sm:text-xl"> {/* Dusty Lavender */}
						Wick brings all of your platforms into one place, making it easier than ever to manage your social media presence.
					</p>

					{/* Buttons */}
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="rounded-md bg-[#78C288] px-3.5 py-2.5 text-sm font-semibold text-[#1B1B1B] shadow-sm hover:bg-[#00FF41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00FF41]" // Iguana Green with hover effect
						>
							Download
						</a>
						<a
							href="#"
							className="text-sm font-semibold text-[#6F6DB2] hover:text-[#FFFFFF]" // Dusty Lavender
						>
							Learn more <span aria-hidden="true">→</span>
						</a>
					</div>
				</div>

				{/* Bottom Gradient */}
				<div
	aria-hidden="true"
	className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
>
	<div
		style={{
			clipPath:
				"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
		}}
		className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1B1B1B] to-[#FFFFFF] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
	/>
</div>

			</div>

			{/* Features Section */}
			<section className="container rounded-xl m-0 w-full p-16 grid grid-cols-1 bg-[#FFFFFF] sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Iguana Green */}
				<Card
					className="text-white"
					title="Integrated Dashboard"
					description="All your social media accounts in one unified interface."
					variant="outline"
					imgSrc="https://picsum.photos/400/300?random=1"
				/>
				<Card
					title="Smart Analytics"
					description="Track performance and grow your audience effectively."
					variant="outline"
					imgSrc="https://picsum.photos/400/300?random=2"
				/>
				<Card
					title="Collaboration Tools"
					description="Team up with collaborators seamlessly."
					variant="outline"
					imgSrc="https://picsum.photos/400/300?random=3"
				/>
			</section>
		</div>
	);
};

export default Hero;
