import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import "./App.css";

import Home from "./pages/Home";

const Home = () => (
	<div style={{ padding: '20px' }}>
	  <h2>Welcome to the React App</h2>
	  <p>This is the Home Page.</p>
	</div>
  );
  
  const About = () => (
	<div style={{ padding: '20px' }}>
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
		</Routes>
	  </Router>
	);
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));