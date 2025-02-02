import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; // Header Import

const Shop = () => {
  const products = [
    { id: 1, name: "Product A", price: "$10", image: "/assets/product1.jpg", buyLink: "https://example.com/productA" },
    { id: 2, name: "Product B", price: "$20", image: "/assets/product2.jpg", buyLink: "https://example.com/productB" },
    { id: 3, name: "Product C", price: "$30", image: "/assets/product3.jpg", buyLink: "https://example.com/productC" },
    { id: 4, name: "Product D", price: "$40", image: "/assets/product4.jpg", buyLink: "https://example.com/productD" },
    { id: 5, name: "Product E", price: "$50", image: "/assets/product5.jpg", buyLink: "https://example.com/productE" },
    { id: 6, name: "Product F", price: "$60", image: "/assets/product6.jpg", buyLink: "https://example.com/productF" },
  ];

  useEffect(() => {
    const canvas = document.getElementById("bg-animation");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    let numParticles = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.color = "rgba(120, 194, 136, 0.8)"; // Iguana Green Glow
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
  }, []);

  return (
    <div className="shop-container">
      <Header /> {/* Header Component */}
      <canvas id="bg-animation"></canvas> {/* Animated Background */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <a href={product.buyLink} className="buy-now" target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </div>
        ))}
      </div>

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

          /* Shop Container */
          .shop-container {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px 20px;
            background-color: #373F51; /* Charcoal Blue */
            color: #FFFFFF; /* Snow */
            min-height: 100vh;
            max-width: 1200px;
            margin: 0 auto;
          }

          /* Space between Header and Shop Content */
          .shop-container h2 {
            margin-top: 80px;
          }

          /* Title */
          .shop-title {
            font-size: 36px;
            margin-bottom: 30px;
            text-transform: uppercase;
            color: #6F6DB2; /* Dusty Lavender */
          }

          /* Product Grid */
          .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            padding: 20px;
          }

          /* Product Card */
          .product-card {
            background: #1B1B1B; /* Eerie Black */
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 6px 12px rgba(111, 109, 178, 0.3);
            text-align: center;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .product-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(111, 109, 178, 0.5);
          }

          /* Image Container */
          .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-bottom: 15px;
          }

          /* Product Image */
          .product-image {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #78C288; /* Iguana Green */
          }

          /* Product Name */
          .product-name {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #FFFFFF; /* Snow */
          }

          /* Product Price */
          .product-price {
            font-size: 18px;
            color: #78C288; /* Iguana Green */
            margin-bottom: 15px;
          }

          /* Buy Now Button */
          .buy-now {
            display: inline-block;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            background-color: #6F6DB2; /* Dusty Lavender */
            color: #FFFFFF; /* Snow */
            text-decoration: none;
            border-radius: 8px;
            transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
          }

          .buy-now:hover {
            background-color: #78C288; /* Iguana Green */
            color: #1B1B1B; /* Eerie Black */
            transform: scale(1.1);
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .product-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .product-grid {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Shop;
