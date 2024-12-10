import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/wick-logoonly.svg"; // Correct logo import
import Header from "../components/Header";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate(); // Initialize navigate

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Login details:", { email, password });
	};

	const handleSignUp = () => {
		navigate("/SignIn"); // Navigate to the Sign-Up page
	};

	return (
		<div
			style={{
				fontFamily: "Arial, sans-serif",
				minHeight: "100vh",
				backgroundColor: "#000", // Black background
				color: "#00FF41", // Matrix green text
				overflow: "hidden",
				animation: "fadeIn 1s ease-in-out",
			}}
		>
			{/* CSS Animations */}
			<style>
				{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}
			</style>
			<Header />
			{/* Login Card */}
			<div className="flex items-center justify-center min-h-screen">
				<div
					style={{
						background: "#",
						padding: "30px 40px",
						borderRadius: "10px",
						boxShadow: "0 40px 60px rgba(55, 63, 81, 0.5)", // Green glowing shadow
						animation: "slideIn 0.8s ease-in-out",
						width: "100%",
						maxWidth: "400px",
						textAlign: "center",
					}}
				>
					<h2 className="text-2xl font-bold text-white mb-5">
						Welcome Back!
					</h2>
					<form onSubmit={handleSubmit}>
						<div
							style={{ marginBottom: "20px", textAlign: "left" }}
						>
							<label
								className="block text-sm font-medium text-white"
								htmlFor="email"
							>
								Email
							</label>
							<input
								className="w-full size-12 border rounded bg-black text-green-500 transition-0.3s"
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div
							style={{ marginBottom: "20px", textAlign: "left" }}
						>
							<label
								htmlFor="password"
								style={{
									display: "block",
									fontSize: "14px",
									marginBottom: "5px",
									color: "#00FF41",
								}}
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								style={{
									width: "100%",
									padding: "10px",
									fontSize: "16px",
									border: "1px solid #00FF41",
									borderRadius: "5px",
									backgroundColor: "#000",
									color: "#00FF41",
									transition: "border 0.3s",
								}}
							/>
						</div>
						<button
							type="submit"
							style={{
								width: "100%",
								padding: "12px 0",
								backgroundColor: "#00FF41",
								border: "none",
								color: "#000",
								fontSize: "16px",
								fontWeight: "bold",
								borderRadius: "5px",
								cursor: "pointer",
								transition: "background-color 0.3s",
							}}
						>
							Login
						</button>
					</form>
					<button
						type="button" // Changed to button (not submit) to avoid form submission
						onClick={handleSignUp} // Call handleSignUp
						style={{
							width: "100%",
							marginTop: "15px",
							padding: "12px 0",
							backgroundColor: "#00FF41",
							border: "none",
							color: "#000",
							fontSize: "16px",
							fontWeight: "bold",
							borderRadius: "5px",
							cursor: "pointer",
							transition: "background-color 0.3s",
						}}
					>
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
