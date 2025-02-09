import React, { useEffect } from "react";  
import Hero from "../components/Hero";
import Header from "../components/Header";
// import Guides from "../components/Guides"; // Commented out
import Extras from "../components/Extras"; 
import Download from "../components/Download"; 
import Contact from "../components/Contact"; 
import CardContainer from "../components/Card"; // Import the Card component

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

        {/* Guides Section - Commented Out */}
        {/*
        <div
          className="w-full"
          style={{
            backgroundColor: "#F9F9F9",
            color: "#78C288",
            margin: 0,
            padding: 0,
          }}
        >
          <Guides />
        </div>
        

        {/* Card Section */}
        <div
          className="w-full"
          style={{
            backgroundColor: "#FFFFFF",
            color: "#1F1D42",
            padding: "40px 0",
          }}
        >
          <CardContainer /> {/* Add CardContainer here */}
        </div>

        {/* Extras Section */}
        <div
          className="w-full"
          style={{
            backgroundColor: "#FFFFFF",
            color: "#78C288",
            margin: 0,
            padding: 0,
          }}
        >
          <Extras />
        </div>

        {/* Download Section */}
        <div
          className="w-full"
          style={{
            backgroundColor: "#FFFFFF",
            color: "#6F6DB2",
            margin: 0,
            padding: "40px 0",
          }}
        >
          <Download />
        </div>

        {/* Contact Section */}
        <div
          className="w-full"
          style={{
            backgroundColor: "#FFFFFF",
            color: "#373F51",
            padding: "40px 0",
          }}
        >
          <Contact />
        </div>

        {/* Footer */}
        <footer
          className="text-center py-3"
          style={{
            backgroundColor: "#FFFFFF",
            color: "#1B1B1B",
            margin: 0,
            padding: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
             
            }}
          ></div>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Wick. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
