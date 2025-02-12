import React from "react";
import Header from "../components/Header";

const Shop = () => {
  const products = [
    {
      "id": 1,
      "name": "Logitech C920 HD Webcam",
      "price": "€74.26",
      "image": "https://picsum.photos/400/300?random=1",
      "buyLink": "https://www.logitech.com/en-us/product/c920-hd-webcam"
    },
    {
      "id": 2,
      "name": "Razer Seiren X USB Microphone",
      "price": "€93.06",
      "image": "https://picsum.photos/400/300?random=2",
      "buyLink": "https://www.razer.com/streaming/razer-seirens-x"
    },
    {
      "id": 3,
      "name": "Elgato Stream Deck",
      "price": "€140.06",
      "image": "https://picsum.photos/400/300?random=3",
      "buyLink": "https://www.elgato.com/en/gaming/stream-deck"
    },
    {
      "id": 4,
      "name": "Neewer Ring Light Kit",
      "price": "€65.80",
      "image": "https://picsum.photos/400/300?random=4",
      "buyLink": "https://www.neewer.com/products/neewer-18-inch-led-ring-light-kit"
    },
    {
      "id": 5,
      "name": "Blue Yeti USB Microphone",
      "price": "€122.20",
      "image": "https://picsum.photos/400/300?random=5",
      "buyLink": "https://www.bluemic.com/en-us/products/yeti/"
    },
    {
      "id": 6,
      "name": "Sony Alpha 7C Camera",
      "price": "€1694.06",
      "image": "https://picsum.photos/400/300?random=6",
      "buyLink": "https://www.sony.com/electronics/interchangeable-lens-cameras/ilce-7c"
    },
    {
      "id": 7,
      "name": "GoPro Hero 9 Black",
      "price": "€375.06",
      "image": "https://picsum.photos/400/300?random=7",
      "buyLink": "https://gopro.com/en/us/shop/cameras/hero9-black"
    },
    {
      "id": 8,
      "name": "Elgato Cam Link 4K",
      "price": "€122.20",
      "image": "https://picsum.photos/400/300?random=8",
      "buyLink": "https://www.elgato.com/en/gaming/cam-link-4k"
    },
    {
      "id": 9,
      "name": "Green Screen Backdrop",
      "price": "€47",
      "image": "https://picsum.photos/400/300?random=9",
      "buyLink": "https://www.neewer.com/products/9-x-13ft-green-screen-backdrop"
    },
    {
      "id": 10,
      "name": "Audio-Technica ATH-M50X Headphones",
      "price": "€141",
      "image": "https://picsum.photos/400/300?random=10",
      "buyLink": "https://www.audio-technica.com/en-us/ath-m50x"
    },
    {
      "id": 11,
      "name": "Logitech G Pro X Gaming Headset",
      "price": "€121.26",
      "image": "https://picsum.photos/400/300?random=11",
      "buyLink": "https://www.logitechg.com/en-us/products/gaming-audio/pro-x-headset.html"
    },
    {
      "id": 12,
      "name": "Streamlabs OBS",
      "price": "Free",
      "image": "https://picsum.photos/400/300?random=12",
      "buyLink": "https://streamlabs.com/"
    },
    {
      "id": 13,
      "name": "Elgato Ring Light",
      "price": "€187.06",
      "image": "https://picsum.photos/400/300?random=13",
      "buyLink": "https://www.elgato.com/en/gaming/ring-light"
    },
    {
      "id": 14,
      "name": "Logitech StreamCam",
      "price": "€158.46",
      "image": "https://picsum.photos/400/300?random=14",
      "buyLink": "https://www.logitech.com/en-us/product/streamcam"
    },
    {
      "id": 15,
      "name": "Corsair K95 RGB Mechanical Keyboard",
      "price": "€187.06",
      "image": "https://picsum.photos/400/300?random=15",
      "buyLink": "https://www.corsair.com/us/en/Categories/Products/Keyboards/Mechanical-Keyboards/K95-RGB-PRO-SE-Mechanical-Gaming-Keyboard/p/CH-9127415-NA"
    },
    {
      "id": 16,
      "name": "Elgato Wave 3 Microphone",
      "price": "€149.46",
      "image": "https://picsum.photos/400/300?random=16",
      "buyLink": "https://www.elgato.com/en/gaming/wave-3"
    },
    {
      "id": 17,
      "name": "Twitch Chatbot (Streamlabs)",
      "price": "Free",
      "image": "https://picsum.photos/400/300?random=17",
      "buyLink": "https://streamlabs.com/chatbot"
    },
    {
      "id": 18,
      "name": "Customizable Desk (IKEA Bekant)",
      "price": "€563.46",
      "image": "https://picsum.photos/400/300?random=18",
      "buyLink": "https://www.ikea.com/us/en/p/bekant-desk-sit-stand-black-brown-s99378799/"
    }
]

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
            color: #fff; /* White color for better contrast */
            font-weight: 700; /* Make it bold for more impact */
            font-size: 2.5em; /* Slightly larger for better visibility */
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6); /* 3D shadow effect */
            text-transform: uppercase; /* Make the price uppercase to add emphasis */
            letter-spacing: 1px; /* Spacing between letters for a clean look */
            background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background for contrast */
            padding: 5px 10px; /* Padding to ensure the background doesn't touch the text */
            border-radius: 5px; /* Rounded corners for the background */
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
