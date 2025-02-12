import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate(); // React Router's navigation function

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("Sign-In Details:", { email, password });
		// Simulate sign-in logic
		setTimeout(() => {
			alert("Sign-In Successful!");
			navigate("/Home"); // Redirect to the Dashboard page
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
							Welcome Back to Wick
						</h1>

						<p className="mt-4 leading-relaxed text-[#373F51]">
							Log in to access your account and explore the best features.
						</p>

						<form
							onSubmit={handleSubmit}
							className="mt-8 grid grid-cols-6 gap-6"
						>
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

							<div className="col-span-6">
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

							<div className="col-span-6 flex items-center justify-between">
								<label
									htmlFor="RememberMe"
									className="flex items-center gap-2 text-lg text-[#373F51]"
								>
									<input
										type="checkbox"
										id="RememberMe"
										className="size-5 rounded-md border-gray-200 bg-[#6F6DB2] shadow-xs"
									/>
									Remember me
								</label>

								<a
									href="/forgot-password"
									className="text-[#6F6DB2] underline"
								>
									Forgot Password?
								</a>
							</div>

							<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
								<button
									type="submit"
									className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-lg font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
								>
									Log In
								</button>

								<p className="mt-4 text-lg text-[#373F51] sm:mt-0">
									Don't have an account?
									<a href="/SignIn" className="text-[#6F6DB2] underline">
										Sign Up
									</a>
								</p>
							</div>
						</form>
					</div>
				</main>
			</div>
		</section>
	);
};

export default Login;
