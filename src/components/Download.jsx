import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation (Back to Home)
import qrCodeImage from "../assets/appQRCode.png"; // QR Code image import

const Download = () => {
	const navigate = useNavigate(); // Initialize navigate to handle back navigation

	const handleBack = () => {
		navigate("/"); // Navigate back to the home page (or any other page)
	};

	return (
		<div
			style={{
				fontFamily: "Arial, sans-serif",
				backgroundColor: "#FFFFFF", // Black background
				color: "#373F51", // Matrix green text
				padding: "20px",
				borderRadius: "10px",
				boxShadow: "0 10px 30px rgba(111, 109, 178, 0.4)", // Green glowing shadow
				maxWidth: "500px",
				margin: "auto", // Centers the download card
				textAlign: "center", // Center the content
			}}
		>
			<h2
				style={{
					fontSize: "24px",
					fontWeight: "bold",
					marginBottom: "20px",
					color: "#373F51",
				}}
			>
				Download Our App
			</h2>
			<p
				style={{
					fontSize: "16px",
					color: "#373F51",
					marginBottom: "20px",
				}}
			>
				Scan the QR code below to download the app directly to your phone!
				(Android only)
			</p>
			<p
				style={{
					fontSize: "16px",
					color: "#373F51",
					marginBottom: "20px",
				}}
			>
				You can also download for Android via{" "}
				<a href="https://www.mediafire.com/file/4v778ukgepjm4wv/wick-final.apk/file">
					this link
				</a>
				.
			</p>

			{/* QR Code Image */}
			<div
				style={{
					display: "flex",
					justifyContent: "center", // Centers the image horizontally
					marginBottom: "20px", // Margin for spacing below the image
				}}
			>
				<img
					src={qrCodeImage}
					alt="QR Code to download the app"
					style={{
						width: "250px", // Adjust size
						height: "250px",
						objectFit: "cover",
					}}
				/>
			</div>
		</div>
	);
};

export default Download;
