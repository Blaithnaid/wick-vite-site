// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <h1>React Navbar</h1>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
        <li><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
        <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
        <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
