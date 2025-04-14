import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Header2 from "../components/Header2";
// import Guides from "../components/Guides"; // Commented out
import Extras from "../components/Extras";
import Download from "../components/Download";
import Contact from "../components/Contact";
import CardContainer from "../components/Card"; // Import the Card component

const Home2 = () => {
	useEffect(() => {
		document.title = "Wick | Home";
	}, []);

	return (
		<>
			<Header2 />
			<div className="relative z-10">
				<div className="w-full text-center" style={{ margin: 0, padding: 0 }}>
					<Hero />
				</div>
				<div className="w-full bg-white text-[#1F1D42] py-20">
					<CardContainer />
				</div>
				<div className="w-full bg-white text-[#78C288] m-0 p-0">
					<Extras />
				</div>
				<div className="w-full bg-white m-0 text-[#6F6DB2] py-5">
					<Download />
				</div>
				<div
					className="w-full"
					style={{
						backgroundColor: "#FFFFFF",
						color: "#373F51",
						padding: "40px 0",
					}}
				>
					<Contact />
				</div>
				<footer
					className="text-center py-3"
					style={{
						backgroundColor: "#FFFFFF",
						color: "#1B1B1B",
						margin: 0,
						padding: 0,
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
						}}
					></div>
					<p className="mb-0">
						&copy; {new Date().getFullYear()} Wick. All rights reserved.
					</p>
				</footer>
			</div>
		</>
	);
};

export default Home2;
