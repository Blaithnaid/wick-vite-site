import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import "./App.css";

import Home from "./pages/Home";

const About = () => (
	<div style={{ padding: "20px" }}>
		<h2>About Us</h2>
		<p>This is the About Page.</p>
	</div>
);

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
};

export default App;
