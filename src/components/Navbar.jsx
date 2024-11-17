// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <h1>React Navbar</h1>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/shop" style={{ color: '#fff', textDecoration: 'none' }}>Shop</Link></li>
        <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

