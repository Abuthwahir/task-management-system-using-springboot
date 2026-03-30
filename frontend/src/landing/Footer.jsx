import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="contact" className="landing-footer">
            <div className="footer-links">
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div className="footer-copy">
                <p>&copy; 2026 TASKIE. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
