import React from "react";
import { useEffect } from "react";

import Hero from "../components/Hero";
import Features from "../components/Features";
import Navbar from "../components/Navbar"; // Import the Navbar component

const Home = () => {
	useEffect(() => {
		document.title = "Wick | Home";
	}, []);

	return (
		<>
			<Navbar /> 
			<Hero />
			<Features />
		</>
	);
};

export default Home;
