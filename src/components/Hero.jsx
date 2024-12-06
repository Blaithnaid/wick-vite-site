"use client";

import { useEffect } from "react";
import Header from "./Header";
import appSync from "../assets/app-sync.png";

const Card = ({ title, description, imgSrc }) => (
	<div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white">
		<img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
		<div className="p-6">
			<h3 className="text-lg font-semibold text-gray-900">{title}</h3>
			<p className="mt-2 text-gray-700">{description}</p>
		</div>
	</div>
);

const Hero = () => {
	return (
		<div className="bg-black h-full w-full">
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
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f07167] to-[#006166] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					/>
				</div>

				{/* Main Content */}
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
					<h1 className="text-balance text-5xl font-bold tracking-tight text-[#78c288] sm:text-7xl">
						Social Media, Simplified.
					</h1>
					<p className="mt-8 text-lg font-medium text-[#78c288] sm:text-xl/8">
						Wick brings all of your platforms into one place, making
						it easier than ever to manage your social media
						presence.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Download
						</a>
						<a
							href="#"
							className="text-sm font-semibold text-[#78c288]"
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
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#E3DF8C] to-[#FFFFFF] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					/>
				</div>
			</div>

			{/* Features Section */}
			<section className="container mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
				<Card
					title="Integrated Dashboard"
					description="All your social media accounts in one unified interface."
					imgSrc={appSync}
				/>
				<Card
					title="Smart Analytics"
					description="Track performance and grow your audience effectively."
					imgSrc=""
				/>
				<Card
					title="Collaboration Tools"
					description="Team up with collaborators seamlessly."
					imgSrc=""
				/>
			</section>
		</div>
	);
};

export default Hero;
