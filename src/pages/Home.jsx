import React from "react";
import { useEffect } from "react";

import Hero from "../components/Hero";
import Features from "../components/Features";

const Home = () => {
	useEffect(() => {
		document.title = "Wick | Home";
	}, []);

	return (
		<>
			<Hero />
			<Features />
		</>
	);
};

export default Home;
