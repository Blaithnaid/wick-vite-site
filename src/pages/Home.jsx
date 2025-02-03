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
        <div className="container-fluid py-5 d-flex justify-items-center">
          <div className="container text-center w-100">
            <Hero />
          </div>
        </div>

        {/* Features Section */}
        <div
          className="container py-5"
          style={{
            backgroundColor: "#FFFFFF", // Section background
            color: "#78C288", // Iguana Green for text
          }}
        >
          <div className="row">
            <div className="col text-center mb-4">
              <h2
                className="display-5 fw-bold"
                style={{
                  color: "#78C288", // Iguana Green
                }}
              >
          
              </h2>
              <p
                className="text-muted"
                style={{
                  color: "#6F6DB2", // Dusty Lavender for description text
                }}
              >
               
              </p>
            </div>
          </div>
          <div className="row g-4">
            {/* You can add feature cards here */}
          </div>
        </div>

        {/* Guides Section */}
        <div
          className="container py-5"
          style={{
            backgroundColor: "#F9F9F9", // Light background for guides section
            color: "#78C288", // Iguana Green for text
          }}
        >
          <div className="row">
            <div className="col text-center mb-4">
              <h2
                className="display-5 fw-bold"
                style={{
                  color: "#78C288", // Iguana Green
                }}
              >
               
              </h2>
              <p
                className="text-muted"
                style={{
                  color: "#6F6DB2", // Dusty Lavender for description text
                }}
              >
            
              </p>
            </div>
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
