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
          /* Guides Container */
.guides-container {
  font-family: Arial, sans-serif;
  background-color: #FFFFFF;
  color: #FFFFFF;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0; /* No padding at the top or bottom */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

/* Content Wrapper */
.content-wrapper {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: flex-start; /* Align content to the top */
  width: 100%;
  gap: 20px; /* Reduce space between carousel and text */
  padding: 10px 0; /* Reduce padding to avoid extra space */
  margin-top: 0; /* No extra top margin */
  margin-bottom: 0; /* No extra bottom margin */
}

/* Carousel Container */
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 450px; /* Adjust the width */
  margin-right: 15px; /* Reduce margin */
}

/* Carousel Button Styling */
.carousel-button {
  background-color: #6F6DB2;
  color: white;
  border: none;
  padding: 10px;
  font-size: 22px;
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

/* Image styling for carousel */
.guide-image {
  width: 100%;
  height: 300px; /* Adjust the image size */
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 5px; /* Smaller space at the bottom */
}

/* Intro Text */
.intro-text {
  flex: 1;
  max-width: 550px; /* Adjust max width */
}

.guides-title {
  font-size: 28px; /* Smaller title */
  margin-bottom: 15px; /* Smaller space between title and description */
  text-transform: uppercase;
  color: #6F6DB2;
  font-weight: bold;
}

/* Guides Description */
.guides-description {
  font-size: 18px; /* Adjusted font size */
  color: #1B1B1B;
  line-height: 1.5;
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Modal Content */
.modal-content {
  background: transparent;
  padding: 0;
  border-radius: 15px;
  width: 80%;
  max-width: 800px;
  color: #FFFFFF;
  text-align: center;
  position: relative;
}

/* Close Button */
.close-button {
  background: #6F6DB2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #78C288;
}

/* Modal Image */
.modal-guide-image {
  width: 100%;
  height: 100%;
  border-radius: 0;
  margin: 0;
  object-fit: cover;
}

.modal-guide-name {
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 10px;
}

/* Modal Guide Description */
.modal-guide-description {
  font-size: 18px;
  color: #DCDCDC;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .carousel-container {
    max-width: 400px;
  }

  .guide-image {
    height: 250px;
  }
}

@media (max-width: 768px) {
  .guide-image {
    height: 230px;
  }
}


        `}
      </style>
    </div>
  );
};

export default Guides;
