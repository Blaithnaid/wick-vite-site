import React from "react";
import Header from "../components/Header";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Little Bonsai",
      price: "$79",
      image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80",
      buyLink: "https://example.com/productA",
    },
    {
      id: 2,
      name: "Tropical Leaf",
      price: "$35",
      image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
      buyLink: "https://example.com/productB",
    },
    {
      id: 3,
      name: "Marijuana Chill",
      price: "$155",
      image: "https://images.unsplash.com/photo-1525945518069-b924046d1385?auto=format&fit=crop&w=600&q=80",
      buyLink: "https://example.com/productC",
    },
    {
      id: 4,
      name: "Product D",
      price: "$100",
      image: "https://picsum.photos/400/300?random=4",
      buyLink: "https://example.com/productD",
    },
    {
      id: 5,
      name: "Product E",
      price: "$100",
      image: "https://picsum.photos/400/300?random=5",
      buyLink: "https://example.com/productE",
    },
    {
      id: 6,
      name: "Product F",
      price: "$100",
      image: "https://picsum.photos/400/300?random=6",
      buyLink: "https://example.com/productF",
    },
  ];

  return (
    <div className="shop-container">
      <Header />
      <div className="spacer"></div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div
              className="cover"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <h1>{product.name}</h1>
              <span className="price">{product.price}</span>
              <div className="card-back">
                <a href={product.buyLink} className="buy-now" target="_blank" rel="noopener noreferrer">
                  Buy Now
                </a>
              </div>
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
            transition: transform 0.6s ease-in-out, box-shadow 0.3s ease-in-out;
            perspective: 1000px;
          }

          .product-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(111, 109, 178, 0.5);
          }

          .cover {
            position: relative;
            height: 400px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            transition: all 0.6s ease-in-out;
            transform-style: preserve-3d;
          }

          .cover h1 {
            position: absolute;
            bottom: 55px;
            left: 50px;
            color: white;
            font-weight: 600;
            font-size: 3em;
          }

          .cover .price {
            position: absolute;
            top: 55px;
            right: 50px;
            color: white;
            font-weight: 200;
            font-size: 2em;
          }

          .card-back {
            position: absolute;
            height: 100%;
            width: 100%;
            background: #1B1B1B;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            opacity: 0;
            transform: rotateY(180deg);
            transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
            flex-direction: column;
          }

          .product-card:hover .cover {
            transform: rotateY(180deg);
          }

          .product-card:hover .card-back {
            opacity: 1;
          }

          .product-card:hover .cover::before {
            background-color: black;
            opacity: 1;
            transition: opacity 0.6s ease-in-out;
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
