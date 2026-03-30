import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay">
        <h1 className="hero-title">Manage Your Tasks Smarter</h1>
        <p className="hero-subtitle">Organize, Track, and Boost Productivity</p>
        <div className="hero-buttons">
          <Link to="/user/admin/register" className="btn">
            Register
          </Link>
          <Link to="/user/login" className="btn btn-login">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
