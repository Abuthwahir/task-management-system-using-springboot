import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="landing-header">
      <Link to="/" className="logo">
        TASKIE
      </Link>
      <nav className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <Link to="/user/login" className="btn-signin">
          Sign In
        </Link>
      </nav>
    </header>
  );
};

export default Header;
