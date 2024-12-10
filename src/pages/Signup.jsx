import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/wick-logoonly.svg"; // Correct logo import
import Header from "../components/Header";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const navigate = useNavigate(); // React Router's navigation function

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords do not match!");
			return;
		}

		console.log("Sign-Up Details:", { email, password });
		// Simulate sign-up logic
		setTimeout(() => {
			alert("Sign-Up Successful!");
			navigate("/login"); // Redirect to the Login page
		}, 1000);
	};

	const handleLogin = () => {
		navigate("/login"); // Navigate to the Sign-Up page
	};

	return (
		<div className="font-sans mh-100vh bg-black text-white overflow-hidden animate-fadeIn">
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
			<div className="flex items-center justify-center min-h-screen">
				<div
					className="w-full bg-[#373f51] p-8 rounded-lg shadow-lg align-center"
					style={{
						animation: "slideIn 0.8s ease-in-out",
						maxWidth: "400px",
					}}
				>
					<h2 className="text-2xl font-bold text-white mb-5">
						Welcome Aboard!
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
								className="w-full size-12 border rounded bg-gray-900 text-white placeholder-opacity-20 pl-2 transition-0.3s"
								placeholder="e.g. johnsmith@gmail.com"
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
								className="block text-sm font-medium text-white"
								htmlFor="password"
							>
								Password
							</label>
							<input
								className="w-full size-12 border rounded bg-gray-900 text-white placeholder-opacity-20 pl-2 transition-0.3s"
								placeholder="Like, 'ILoveWick2024'."
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div
							style={{ marginBottom: "20px", textAlign: "left" }}
						>
							<label
								className="block text-sm font-medium text-white"
								htmlFor="confirmPassword"
							>
								Confirm Password
							</label>
							<input
								className="w-full size-12 border rounded bg-gray-900 text-white placeholder-opacity-20 pl-2 transition-0.3s"
								placeholder="Same as above..."
								type="password"
								id="confirmPassword"
								value={confirmPassword}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<button
							className="w-full p-3 bg-[#7870EB] border-none text-white font-bold hover:bg-[#5a54b8] transition-colors duration-300"
							type="submit"
						>
							Login
						</button>
					</form>
					<button
						className="w-full mt-3 py-3 px-0 bg-[#78c288] border-none text-white font-bold hover:bg-[#5a9b72] transition-colors duration-300"
						type="button" // Changed to button (not submit) to avoid form submission
						onClick={handleLogin} // Call handleSignUp
					>
						Sign up
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
