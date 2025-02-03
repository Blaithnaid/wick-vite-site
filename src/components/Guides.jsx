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

      <h2 className="guides-title">Guides</h2>

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
            text-align: center;
            padding: 50px 20px;
            background-color: #FFFFFF; /* Charcoal Blue */
            color: #FFFFFF; /* Snow */
            min-height: 100vh;
            max-width: 1200px;
            margin: 0 auto;
          }

          /* Space between Header and Content */
          .spacer {
            margin-top: 120px; /* Increased space between header and content */
          }

          /* Guides Title */
          .guides-title {
            font-size: 36px;
            margin-bottom: 30px;
            text-transform: uppercase;
            color: #6F6DB2; /* Dusty Lavender */
          }

          /* Carousel Container */
          .carousel-container {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }

          .carousel-button {
            background-color: #6F6DB2;
            color: white;
            border: none;
            padding: 20px;
            font-size: 24px;
            cursor: pointer;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 50%;
            z-index: 10;
          }

          .carousel-button.prev {
            left: 20px;
          }

          .carousel-button.next {
            right: 20px;
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
            height: 500px; /* Increase the size of the image */
            object-fit: cover;
            border-radius: 15px;
            margin-bottom: 10px;
          }

          .guide-name {
            font-size: 22px;
            font-weight: bold;
            color: #1B1B1B; /* Snow */
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

          /* Hide Header when Modal is Open */
          .modal-active .guides-container header {
            display: none; /* Hide the header when the modal is active */
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .carousel-container {
              flex-direction: column;
            }

            .guide-image {
              height: 400px; /* Adjust height for smaller screens */
            }
          }

          @media (max-width: 768px) {
            .guide-image {
              height: 300px; /* Further reduce height for mobile screens */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Guides;
