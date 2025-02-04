import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Header from "../components/Header";
import Guides from "../components/Guides"; // Import the Guides Component

const Home = () => {
  useEffect(() => {
    document.title = "Wick | Home";
  }, []);

  return (
    <>
      <Header />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="py-5 w-full flex justify-center">
          <div className="w-full text-center">
            <Hero />
          </div>
        </div>

        {/* Features Section */}
        <div
          className="py-5 w-full"
          style={{
            backgroundColor: "#FFFFFF", // Section background
            color: "#78C288", // Iguana Green for text
          }}
        >
          <div className="text-center mb-4">
            <h2
              className="display-5 fw-bold"
              style={{
                color: "#78C288", // Iguana Green
              }}
            >
              {/* Features heading */}
            </h2>
            <p
              className="text-muted"
              style={{
                color: "#6F6DB2", // Dusty Lavender for description text
              }}
            >
              {/* Features description */}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Feature cards could go here */}
          </div>
        </div>

        {/* Guides Section */}
        <div
          className="py-5 w-full"
          style={{
            backgroundColor: "#F9F9F9", // Light background for guides section
            color: "#78C288", // Iguana Green for text
          }}
        >
          <div className="text-center mb-4">
            <h2
              className="display-5 fw-bold"
              style={{
                color: "#78C288", // Iguana Green
              }}
            >
              {/* Guides heading */}
            </h2>
            <p
              className="text-muted"
              style={{
                color: "#6F6DB2", // Dusty Lavender for description text
              }}
            >
              {/* Guides description */}
            </p>
          </div>
          <Guides /> {/* Add Guides component here */}
        </div>

        {/* Footer */}
        <footer
          className="text-center py-3"
          style={{
            backgroundColor: "#FFFFFF", // Background
            color: "#1B1B1B", // Iguana Green text
          }}
        >
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Wick. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
