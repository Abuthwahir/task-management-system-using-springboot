import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          TASKIE
        </Link>
        <nav>
          <ul className="nav-menu">
            <li>
              <a href="#home" className="nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-item">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-item">
                Contact
              </a>
            </li>
            <li>
              <Link to="/login" className="nav-button">
                Login / Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
