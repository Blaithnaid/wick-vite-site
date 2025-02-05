import React, { useState } from "react";
import Header from "../components/Header"; // Import the Header Component

const Guides = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current guide index in the carousel

  const guides = [
    { id: 1, name: "Guide 1", image: "/src/assets/youtube.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, name: "Guide 2", image: "/src/assets/youtube.jpg", description: "Description for Guide 2" },
    { id: 3, name: "Guide 3", image: "/src/assets/youtube.jpg", description: "Description for Guide 3" },
    { id: 4, name: "Guide 4", image: "/src/assets/youtube.jpg", description: "Description for Guide 4" },
    { id: 5, name: "Guide 5", image: "/src/assets/youtube.jpg", description: "Description for Guide 5" },
    { id: 6, name: "Guide 6", image: "/src/assets/youtube.jpg", description: "Description for Guide 6" },
  ];

  const openModal = (guide) => {
    setSelectedGuide(guide);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGuide(null);
  };

  const nextGuide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % guides.length);
  };

  const prevGuide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + guides.length) % guides.length);
  };

  return (
    <div className={`guides-container ${isModalOpen ? "modal-active" : ""}`}>
      <Header /> {/* Header Component */}
      <canvas id="bg-animation"></canvas> {/* Background Animation */}

      {/* Space between Header and Content */}
      <div className="spacer"></div>

      <div className="content-wrapper">
        {/* Carousel for Guides */}
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevGuide}>{"<"}</button>

          <div className="carousel-content">
            <div className="guide-image-container" onClick={() => openModal(guides[currentIndex])}>
              <img src={guides[currentIndex].image} alt={guides[currentIndex].name} className="guide-image" />
              <h3 className="guide-name">{guides[currentIndex].name}</h3>
            </div>
          </div>

          <button className="carousel-button next" onClick={nextGuide}>{">"}</button>
        </div>

        {/* Title and Description */}
        <div className="intro-text">
          <h2 className="guides-title">Guides on start up and current trends</h2>
          <p className="guides-description">
            Get insights on the latest trends and startup strategies with our easy-to-follow guides. Perfect for anyone looking to stay ahead in the ever-changing world of business and technology.
          </p>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && selectedGuide && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>X</button>
            <div className="modal-image">
              <img src={selectedGuide.image} alt={selectedGuide.name} className="modal-guide-image" />
            </div>
            <h3 className="modal-guide-name">{selectedGuide.name}</h3>
            <p className="modal-guide-description">{selectedGuide.description}</p>
          </div>
        </div>
      )}

      <style>
        {`
          /* Background Animation Canvas */
          #bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1;
          }

          /* Guides Container */
          .guides-container {
            font-family: Arial, sans-serif;
            background-color: #FFFFFF; /* Charcoal Blue */
            color: #FFFFFF; /* Snow */
            min-height: 100vh;
            width: 100%; /* Full width */
            margin: 0;
            padding: 0; /* Remove padding above */
          }

          /* Space between Header and Content */
          .spacer {
            margin-top: 0; /* Remove padding above the guides */
          }

          /* Content Wrapper */
          .content-wrapper {
            display: flex;
            justify-content: center; /* Center the content horizontally */
            align-items: flex-start;
            width: 100%; /* Full width */
            padding: 20px;
            margin-top: 0; /* No extra space from the top */
          }

          /* Carousel Container */
          .carousel-container {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 100%;
            max-width: 350px; /* Size of the carousel */
            margin-right: 30px; /* Space between carousel and text */
          }

          .carousel-button {
            background-color: #6F6DB2;
            color: white;
            border: none;
            padding: 10px;
            font-size: 18px;
            cursor: pointer;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 50%;
            z-index: 10;
          }

          .carousel-button.prev {
            left: -20px;
          }

          .carousel-button.next {
            right: -20px;
          }

          .carousel-content {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            overflow: hidden;
          }

          .guide-image-container {
            position: relative;
            display: inline-block;
            text-align: center;
            cursor: pointer;
          }

          /* Image styling for carousel */
          .guide-image {
            width: 100%;
            height: 250px; /* Smaller size */
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 10px;
          }

          .guide-name {
            font-size: 20px;
            font-weight: bold;
            color: #1B1B1B; /* Snow */
          }

          /* Intro Text */
          .intro-text {
            flex: 1;
            max-width: 50%; /* Text takes up half the space */
          }

          /* Guides Title */
          .guides-title {
            font-size: 28px;
            margin-bottom: 15px;
            text-transform: uppercase;
            color: #6F6DB2; /* Dusty Lavender */
            font-weight: bold;
          }

          /* Guides Description */
          .guides-description {
            font-size: 18px;
            color: #1B1B1B; /* Dusty Charcoal */
            line-height: 1.6;
          }

          /* Modal Overlay */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }

          /* Modal Content */
          .modal-content {
            background: transparent; /* Transparent background for modal */
            padding: 0; /* Remove padding to make it fit */
            border-radius: 15px;
            width: 80%; /* Increase width to make it larger */
            max-width: 800px;
            color: #FFFFFF;
            text-align: center;
            position: relative; /* To position the close button */
          }

          /* Close Button */
          .close-button {
            background: #6F6DB2; /* Dusty Lavender */
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 18px;
            cursor: pointer;
            position: absolute; /* Position absolute to top right */
            top: 15px;
            right: 15px;
            transition: background-color 0.3s ease;
          }

          .close-button:hover {
            background-color: #78C288; /* Iguana Green */
          }

          /* Modal Image */
          .modal-guide-image {
            width: 100%;
            height: 100%; /* Make image fill the modal */
            border-radius: 0; /* Remove border-radius to make the image touch all sides */
            margin: 0; /* Remove any margin */
            object-fit: cover; /* Ensure the image fills the space */
          }

          /* Modal Guide Name */
          .modal-guide-name {
            font-size: 24px;
            font-weight: bold;
            margin-top: 15px;
            margin-bottom: 10px;
          }

          /* Modal Guide Description */
          .modal-guide-description {
            font-size: 18px;
            color: #DCDCDC; /* Light Gray */
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .content-wrapper {
              flex-direction: column;
              align-items: center;
            }

            .carousel-container {
              max-width: 400px; /* Slightly increase size on smaller screens */
            }

            .guide-image {
              height: 200px; /* Adjust image height for smaller screens */
            }
          }

          @media (max-width: 768px) {
            .guide-image {
              height: 180px; /* Further reduce height for mobile screens */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Guides;
