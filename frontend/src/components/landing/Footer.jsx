import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-about">
          <h3>TASKIE</h3>
          <p>The ultimate solution for modern teams to manage tasks smarter.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#!">Privacy Policy</a>
            </li>
            <li>
              <a href="#!">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Social</h4>
          <ul>
            <li>
              <a href="#!">Twitter</a>
            </li>
            <li>
              <a href="#!">LinkedIn</a>
            </li>
            <li>
              <a href="#!">Github</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TASKIE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
