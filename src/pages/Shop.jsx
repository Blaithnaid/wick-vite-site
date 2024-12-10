import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
	const products = [
		{ id: 1, name: "Product A", price: "$10" },
		{ id: 2, name: "Product B", price: "$20" },
		{ id: 3, name: "Product C", price: "$30" },
	];

	return (
		<div className="shop-container">
			<h2 className="shop-title">Shop Page</h2>
			<ul className="product-list">
				{products.map((product) => (
					<li key={product.id} className="product-item">
						<strong>{product.name}</strong>: {product.price}
						<Link to={`/product/${product.id}`} className="buy-now">
							Buy Now
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Shop;
