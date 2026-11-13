import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footerContent">

        <div className="footerLogo">
          <h2>Foodies</h2>
          <p>Delicious food, made with love.</p>
        </div>

        <div className="footerLinks">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footerContact">
          <h3>Contact Us</h3>
          <p>Email: info@foodies.com</p>
          <p>Phone: +92 300 1234567</p>
        </div>

      </div>

      <div className="footerBottom">
        <p>© 2026 Foodies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
