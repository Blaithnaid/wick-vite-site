import React, { useEffect } from "react";  
import Hero from "../components/Hero";
import Header from "../components/Header";
import Guides from "../components/Guides"; // Import the Guides Component
import Extras from "../components/Extras"; // Import the new Extras component
import Download from "../components/Download"; // Import the Download component
import Contact from "../components/Contact"; // Import the Contact component

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
        <div className="w-full text-center" style={{ margin: 0, padding: 0 }}>
          <Hero />
        </div>

        {/* Guides Section */}
        <div
          className="w-full"
          style={{
            backgroundColor: "#F9F9F9", // Light background for guides section
            color: "#78C288", // Iguana Green for text
            margin: 0, // Remove margin
            padding: 0, // Remove padding
          }}
        >
          <Guides /> {/* Add Guides component here */}
        </div>

        {/* Extras Section */}
        <div
          className="w-full"
          style={{
            backgroundColor: "#FFFFFF", // Section background
            color: "#78C288", // Iguana Green for text
            margin: 0, // Remove margin
            padding: 0, // Remove padding
          }}
        >
          <Extras /> {/* Add Extras component here */}
        </div>

        {/* Download Section */}
        <div
          className="w-full"
          style={{
            backgroundColor: "#FFFFFF", // Dark background for download section
            color: "#6F6DB2", // Matrix green text
            margin: 0, // Remove margin
            padding: "40px 0", // Padding for spacing
          }}
        >
          <Download /> {/* Add the Download component here */}
        </div>

        {/* Contact Section */}
        <div
          className="w-full"
          style={{
            backgroundColor: "#FFFFFF", // Light background for contact section
            color: "#373F51", 
            padding: "40px 0", // Padding for spacing
          }}
        >
          <Contact /> {/* Add the Contact component here */}
        </div>

        {/* Footer */}
        <footer
          className="text-center py-3"
          style={{
            backgroundColor: "#FFFFFF", // Background
            color: "#1B1B1B", // Iguana Green text
            margin: 0, // Remove margin
            padding: 0, // Remove padding
          }}
        >
          <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
      </div>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Wick. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
