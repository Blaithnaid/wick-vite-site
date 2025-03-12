import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import DownloadPage from "./pages/DownloadPage";
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
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/downloadPage" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
};

export default App;
