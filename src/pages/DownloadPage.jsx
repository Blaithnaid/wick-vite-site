import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styled from 'styled-components';


// Styled components for styling
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const ContentWrapper = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  max-width: 500px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Subheading = styled.p`
  font-size: 1.1rem;
  color: #777;
  margin-bottom: 20px;
`;

const QRCodeImage = styled.img`
  width: 250px; /* Adjust size */
  height: 250px;
  margin: 30px 0;
  object-fit: cover; /* Ensure the image is properly scaled */
`;

const DownloadButton = styled.button`
  background-color: #4CAF50;
  color: white;
  font-size: 1.2rem;
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const DownloadPage = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Heading>Download Your App</Heading>
        <Subheading>Scan the QR code to download the app now!</Subheading>
        
        {/* Replace with your QR code image */}
        <QRCodeImage 
          src="/wick-vite-site/src/assets/appQRCode.png" 
          alt="QR Code" 
        />
    
      </ContentWrapper>
    </PageWrapper>
  );
};

export default DownloadPage;