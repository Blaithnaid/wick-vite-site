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
    navigate("/signIn"); // Navigate to the Sign-Up page
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

        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 40px;
          background-color: rgba(0, 0, 0, 0.9); /* Semi-transparent black */
          color: #00FF41; /* Matrix green */
          box-shadow: 0 2px 10px rgba(0, 255, 65, 0.4); /* Glowing shadow */
        }

        .nav-menu {
          display: flex;
          justify-content: center;
          gap: 30px;
        }

        .nav-menu a {
          text-decoration: none;
          color: #00FF41;
          font-size: 18px;
          transition: color 0.3s ease-in-out;
        }

        .nav-menu a:hover {
          color: white;
        }

         .nav-content {
          flex: 1;
          display: flex;
          justify-content: center; /* Center the links */
        }

        .logo {
          height: 40px;
        }
      `}
      </style>
      <Header />
      {/* Navbar */}
      <nav>
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Wick Logo"
            className="logo"
            style={{ height: "40px" }}
          />
        </div>

        {/* Menu */}
        <div className="nav-content">
          <div className="nav-menu">
            <a href="/">Home</a>
            <a href="/about">Download</a>
            <a href="/shop">Shop</a>
          </div>
        </div>
      </nav>

      {/* Login Card */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 80px)", // Adjusted to exclude navbar height
        }}
      >
        <div
          style={{
            background: "#111", // Slightly lighter black
            padding: "30px 40px",
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0, 255, 65, 0.4)", // Green glowing shadow
            animation: "slideIn 0.8s ease-in-out",
            width: "100%",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#00FF41",
            }}
          >
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "14px",
                  marginBottom: "5px",
                  color: "#00FF41",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
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
            Sign-Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
