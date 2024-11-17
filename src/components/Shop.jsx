// src/components/Shop.jsx
import React from 'react';

const Shop = () => {
  const products = [
    { id: 1, name: 'Product A', price: '$10' },
    { id: 2, name: 'Product B', price: '$20' },
    { id: 3, name: 'Product C', price: '$30' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shop Page</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '10px' }}>
            <strong>{product.name}</strong>: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
