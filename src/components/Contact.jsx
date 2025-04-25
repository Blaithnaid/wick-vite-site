import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful form submission
    console.log(formData);
    setFormStatus("Thank you for your message! We'll get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        backgroundColor: "#6F6DB2",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* Left Section - Contact Form */}
      <div style={{ flex: 1, marginRight: "30px" }}>
        <h2
          style={{
            fontSize: "48px", // Increased font size for title
            color: "#1B1B1B",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          Get in Touch
        </h2>
        <p
          style={{
            fontSize: "24px", // Increased font size for description
            color: "#1B1B1B",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          We'd love to hear from you. Fill out the form below to get in contact
          with us.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px", // Increased border radius for curved effect
                  border: "1px solid #ccc",
                  backgroundColor: "#FFFFFF", // Set background color to white
                  marginBottom: "15px",
                  transition: "border-color 0.3s ease",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px", // Increased border radius for curved effect
                  border: "1px solid #ccc",
                  backgroundColor: "#FFFFFF", // Set background color to white
                  marginBottom: "15px",
                  transition: "border-color 0.3s ease",
                }}
              />
            </div>
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px", // Increased border radius for curved effect
                border: "1px solid #ccc",
                backgroundColor: "#FFFFFF", // Set background color to white
                marginBottom: "15px",
                transition: "border-color 0.3s ease",
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "transparent",
              color: "#1B1B1B",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "25px", // Curved button
              border: "2px solid #1B1B1B",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            className="hover:bg-[#1B1B1B] hover:text-white"
          >
            Send Message
          </button>
        </form>

        {/* Form Submission Status */}
        {formStatus && (
          <p
            style={{
              marginTop: "20px",
              color: "#78C288",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "24px", // Larger text for confirmation
            }}
          >
            {formStatus}
          </p>
        )}
      </div>

      {/* Right Section - Contact Info */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          marginTop: "0",
          marginLeft: "20px", // To move it a bit to the left
        }}
      >
        <h3
          style={{
            fontSize: "36px", // Larger font size for contact info header
            fontWeight: "bold",
            color: "#1B1B1B",
            textAlign: "left",
            fontStyle: "italic",
            marginBottom: "15px",
          }}
        >
          Contact Information
        </h3>
        <ul style={{ listStyleType: "none", paddingLeft: 0, marginTop: "0" }}>
          <li style={{ marginBottom: "10px" }}>
            <small
              style={{
                fontSize: "16px", // Larger font size for labels
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "#1B1B1B",
              }}
            >
              Address:
            </small>
            <p style={{ fontSize: "18px", color: "#1B1B1B", marginTop: "5px" }}>
            Atlantic Technological University - Galway City, Dublin Road, Galway Galway H91 T8NW
            </p>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <small
              style={{
                fontSize: "16px", // Larger font size for labels
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "#1B1B1B",
              }}
            >
              Email:
            </small>
            <p style={{ fontSize: "18px", color: "#1B1B1B", marginTop: "5px" }}>
              g00412669@atu.ie
            </p>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <small
              style={{
                fontSize: "16px", // Larger font size for labels
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "#1B1B1B",
              }}
            >
              Follow Us:
            </small>
            <div
              style={{
                display: "flex",
                justifyContent: "center", // Centering the social links
                gap: "15px",
                marginTop: "10px",
              }}
            >
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "18px", // Larger font size for social links
                  color: "#3b5998",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "18px", // Larger font size for social links
                  color: "#1DA1F2",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                X
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "18px", // Larger font size for social links
                  color: "#C13584",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                Instagram
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
