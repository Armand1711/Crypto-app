import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'black' }}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are CryptoGraph, a platform dedicated to providing comprehensive cryptocurrency data and analysis. Our mission is to empower individuals with the information they need to navigate the world of digital currencies.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@cryptograph.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Twitter: @CryptoGraph</p>
          <p>Facebook: CryptoGraph</p>
          <p>Instagram: @CryptoGraph_Official</p>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2024 CryptoGraph. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
