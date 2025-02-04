import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Shop = () => {
  const products = [
    { id: 1, name: "Product", price: "$100", image: "https://picsum.photos/400/300?random=1", buyLink: "https://example.com/productA" },
    { id: 2, name: "Product", price: "$100", image: "https://picsum.photos/400/300?random=2", buyLink: "https://example.com/productB" },
    { id: 3, name: "Product", price: "$100", image: "https://picsum.photos/400/300?random=3", buyLink: "https://example.com/productC" },
    { id: 4, name: "Product", price: "$100", image: "https://picsum.photos/400/300?random=4", buyLink: "https://example.com/productD" },
    { id: 5, name: "Product", price: "$100", image: "https://picsum.photos/400/300?random=5", buyLink: "https://example.com/productE" },
    { id: 6, name: "Product", price: "$100", image: "https://picsum.photos/400/300?random=6", buyLink: "https://example.com/productF" },
  ];

  return (
    <div className="shop-container">
      <Header />
      <div className="spacer"></div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <a href={product.buyLink} className="buy-now" target="_blank" rel="noopener noreferrer">
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          .shop-container {
            text-align: center;
            padding: 50px 20px;
            background-color: #FFFFFF;
            min-height: 100vh;
            max-width: 1200px;
            margin: 0 auto;
          }

          .spacer {
            margin-top: 80px;
          }

          .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            padding: 20px;
          }

          .product-card {
            background: #FFFFFF;
            border-radius: 15px;
            box-shadow: 0 6px 12px rgba(111, 109, 178, 0.3);
            text-align: center;
            overflow: hidden;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .product-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(111, 109, 178, 0.5);
          }

          .image-container {
            width: 100%;
            height: 200px;
            overflow: hidden;
          }

          .product-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .product-info {
            padding: 20px;
          }

          .product-name {
            font-size: 22px;
            font-weight: bold;
            margin-top: 10px;
          }

          .product-price {
            font-size: 18px;
            color: #1B1B1B;
            margin-bottom: 15px;
          }

          .buy-now {
            display: inline-block;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            background-color: #6F6DB2;
            color: #FFFFFF;
            text-decoration: none;
            border-radius: 8px;
            transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
          }

          .buy-now:hover {
            background-color: #78C288;
            color: #1B1B1B;
            transform: scale(1.1);
          }

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
