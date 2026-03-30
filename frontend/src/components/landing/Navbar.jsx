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
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-item">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-item">
                Contact
              </Link>
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
