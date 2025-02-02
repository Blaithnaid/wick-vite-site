import React, { useState } from "react";
import Header from "../components/Header"; // Import the Header Component

const Guides = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(null);

  const guides = [
    { id: 1, name: "Guide 1", image: "/assets/guide1.jpg", description: "Description for Guide 1" },
    { id: 2, name: "Guide 2", image: "/assets/guide2.jpg", description: "Description for Guide 2" },
    { id: 3, name: "Guide 3", image: "/assets/guide3.jpg", description: "Description for Guide 3" },
    { id: 4, name: "Guide 4", image: "/assets/guide4.jpg", description: "Description for Guide 4" },
    { id: 5, name: "Guide 5", image: "/assets/guide5.jpg", description: "Description for Guide 5" },
    { id: 6, name: "Guide 6", image: "/assets/guide6.jpg", description: "Description for Guide 6" },
  ];

  const openModal = (guide) => {
    setSelectedGuide(guide);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGuide(null);
  };

  return (
    <div className="guides-container">
      <Header /> {/* Header Component */}
      <canvas id="bg-animation"></canvas> {/* Background Animation */}

      {/* Space between Header and Content */}
      <div className="spacer"></div>

      <h2 className="guides-title">Guides</h2>

      <div className="guides-grid">
        {guides.map((guide) => (
          <div key={guide.id} className="guide-card" onClick={() => openModal(guide)}>
            <div className="image-container">
              <img src={guide.image} alt={guide.name} className="guide-image" />
            </div>
            <h3 className="guide-name">{guide.name}</h3>
          </div>
        ))}
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

          /* Spacer to add space between Header and Content */
          .spacer {
            margin-top: 80px;
          }

          /* Guides Title */
          .guides-title {
            font-size: 36px;
            margin-bottom: 30px;
            text-transform: uppercase;
            color: #6F6DB2; /* Dusty Lavender */
          }

          /* Guides Grid */
          .guides-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            padding: 20px;
          }

          /* Guide Card */
          .guide-card {
            background: #373F51; /* Eerie Black */
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 6px 12px rgba(111, 109, 178, 0.3);
            text-align: center;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            cursor: pointer;
          }

          .guide-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(111, 109, 178, 0.5);
          }

          /* Image Container in Guide Card */
          .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-bottom: 15px;
          }

          /* Guide Image */
          .guide-image {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #1B1B1B; /* Iguana Green */
          }

          /* Guide Name */
          .guide-name {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #FFFFFF; /* Snow */
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
            background: #373F51; /* Eerie Black */
            padding: 40px;
            border-radius: 15px;
            width: 60%;
            max-width: 800px;
            color: #FFFFFF;
            text-align: center;
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
            margin-bottom: 20px;
            transition: background-color 0.3s ease;
          }

          .close-button:hover {
            background-color: #78C288; /* Iguana Green */
          }

          /* Modal Image */
          .modal-guide-image {
            width: 100%;
            height: auto;
            border-radius: 10px;
            margin-bottom: 20px;
          }

          /* Modal Guide Name */
          .modal-guide-name {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
          }

          /* Modal Guide Description */
          .modal-guide-description {
            font-size: 18px;
            color: #DCDCDC; /* Light Gray */
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .guides-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .guides-grid {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Guides;
