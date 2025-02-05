import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Guides from "../components/Guides"; // Import the Guides Component
import Extras from "../components/Extras"; // Import the new Extras component

const Home = () => {
  useEffect(() => {
    document.title = "Wick | Home";
  }, []);

  return (
    <>
      <Header /> {/* Header Section */}

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="w-full text-center">
          <Hero />
        </div>

        {/* Extras Section */}
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
              Features
            </h2>
            <p
              className="text-muted"
              style={{
                color: "#6F6DB2", // Dusty Lavender for description text
              }}
            >
              Discover the essential features that simplify your workflow and help you succeed.
            </p>
          </div>
          <Extras /> {/* Add Extras component here */}
        </div>

        {/* Guides Section */}
        <div
          className="w-full"
          style={{
            backgroundColor: "#F9F9F9", // Light background for guides section
            color: "#78C288", // Iguana Green for text
            paddingTop: 0, // Remove padding above guides section
            paddingBottom: "30px", // Adjust padding below guides section if needed
          }}
        >
          <div className="text-center mb-4">
            <h2
              className="display-5 fw-bold"
              style={{
                color: "#78C288", // Iguana Green
              }}
            >
              Guides
            </h2>
            <p
              className="text-muted"
              style={{
                color: "#6F6DB2", // Dusty Lavender for description text
              }}
            >
              Explore helpful guides to maximize your success with our tools.
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
