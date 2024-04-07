import React from 'react';
import './Navbar.css';
import Logo from './Logo.png'; // Import the logo image

const Navbar = () => {
  return (
    <div className="navbar" style={{ backgroundColor: 'black' }}> {/* Set background color */}
      <img src={Logo} alt="Crypto App Logo" className="logo" /> {/* Add the logo */}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/comparison">Comparison</a></li>
        <li><a href="/timeline">Timeline</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
