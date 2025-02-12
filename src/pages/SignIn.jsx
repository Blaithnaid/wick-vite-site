import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const SignIn = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords do not match!");
			return;
		}

		console.log("Account Created:", { firstName, lastName, email, password });
		// Simulate account creation
		setTimeout(() => {
			alert("Account Successfully Created!");
			navigate("/home"); // Redirect to home page after successful sign-up
		}, 1000);
	};

	return (
		<section className="bg-white">
			<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
				<Header /> {/* Header Section */}

				<aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
					<img
						alt=""
						src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV8fDB8fHx8&auto=format&fit=crop&w=870&q=80"
						className="absolute inset-0 h-full w-full object-cover"
					/>
				</aside>

				<main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
					<div className="max-w-xl lg:max-w-3xl">
						<h1 className="mt-6 text-3xl font-bold text-[#373F51] sm:text-4xl md:text-5xl">
							Create Your Wick Account
						</h1>

						<p className="mt-4 leading-relaxed text-[#373F51]">
							Sign up now and start your journey with us!
						</p>

						<form
							onSubmit={handleSubmit}
							className="mt-8 grid grid-cols-6 gap-6"
						>
							<div className="col-span-6 sm:col-span-3">
								<label
									htmlFor="FirstName"
									className="block text-lg font-medium text-[#373F51]"
								>
									First Name
								</label>
								<input
									type="text"
									id="FirstName"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									required
									className="mt-1 w-full py-3 px-4 rounded-md border-gray-200 bg-[#6F6DB2] text-lg text-[#FFFFFF] shadow-sm"
								/>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label
									htmlFor="LastName"
									className="block text-lg font-medium text-[#373F51]"
								>
									Last Name
								</label>
								<input
									type="text"
									id="LastName"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									required
									className="mt-1 w-full py-3 px-4 rounded-md border-gray-200 bg-[#6F6DB2] text-lg text-[#FFFFFF] shadow-sm"
								/>
							</div>

							<div className="col-span-6">
								<label
									htmlFor="Email"
									className="block text-lg font-medium text-[#373F51]"
								>
									Email
								</label>
								<input
									type="email"
									id="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className="mt-1 w-full py-3 px-4 rounded-md border-gray-200 bg-[#6F6DB2] text-lg text-[#FFFFFF] shadow-sm"
								/>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label
									htmlFor="Password"
									className="block text-lg font-medium text-[#373F51]"
								>
									Password
								</label>
								<input
									type="password"
									id="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									className="mt-1 w-full py-3 px-4 rounded-md border-gray-200 bg-[#6F6DB2] text-lg text-[#FFFFFF] shadow-sm"
								/>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label
									htmlFor="ConfirmPassword"
									className="block text-lg font-medium text-[#373F51]"
								>
									Confirm Password
								</label>
								<input
									type="password"
									id="ConfirmPassword"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									required
									className="mt-1 w-full py-3 px-4 rounded-md border-gray-200 bg-[#6F6DB2] text-lg text-[#FFFFFF] shadow-sm"
								/>
							</div>

							<div className="col-span-6">
								<label htmlFor="Terms" className="flex gap-4">
									<input
										type="checkbox"
										id="Terms"
										required
										className="size-5 rounded-md border-gray-200 bg-[#6F6DB2] shadow-xs"
									/>
									<span className="text-lg text-[#373F51]">
										I agree to the{" "}
										<a href="#" className="text-[#6F6DB2] underline">
											terms and conditions
										</a>{" "}
										and{" "}
										<a href="#" className="text-[#6F6DB2] underline">
											privacy policy
										</a>
										.
									</span>
								</label>
							</div>

							<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
								<button
									type="submit"
									className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-lg font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
								>
									Sign Up
								</button>

								<p className="mt-4 text-lg text-[#373F51] sm:mt-0">
									Already have an account?
									<a href="/login" className="text-[#6F6DB2] underline">
										Log in
									</a>
									.
								</p>
							</div>
						</form>
					</div>
				</main>
			</div>
		</section>
	);
};

export default SignIn;
