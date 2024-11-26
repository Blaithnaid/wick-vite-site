import React from "react";
import { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Navbar from "../components/Navbar"; // Import the Navbar component
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS 

const Home = () => {
	useEffect(() => {
		document.title = "Wick | Home";
	}, []);

	return (
		<>
			{/* Navbar */}
			<Navbar /> 

			{/* Hero Section */}
			<div className="container-fluid bg-light py-5">
				<div className="container text-center">
					<Hero />
				</div>
			</div>

			{/* Features Section */}
			<div className="container py-5">
				<div className="row">
					<div className="col text-center mb-4">
						<h2 className="display-5 fw-bold">Our Features</h2>
						<p className="text-muted">
							Discover what makes us unique and reliable for all your needs.
						</p>
					</div>
				</div>
				<div className="row g-4">
				
					<Features />
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-dark text-white text-center py-3">
				<p className="mb-0">
					&copy; {new Date().getFullYear()} Wick. All rights reserved.
				</p>
			</footer>
		</>
	);
};

export default Home;
