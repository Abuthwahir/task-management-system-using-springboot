import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Manage Your Tasks Smarter</h1>
        <p>Organize, Track, and Boost Productivity with TASKIE. The ultimate solution for modern teams.</p>
        <div className="hero-buttons">
          <Link to="/register" className="btn primary">Register</Link>
          <Link to="/login" className="btn secondary">Login</Link>
        </div>
      </div>
      <div className="hero-dashboard-ui">
        <div className="dashboard-header">
            <h3>My Dashboard</h3>
            <div className="dashboard-dots">
                <span className="dot-1"></span>
                <span className="dot-2"></span>
                <span className="dot-3"></span>
            </div>
        </div>
        <div className="dashboard-card">
            <div className="card-title">Project Alpha</div>
            <div className="card-progress"><div className="progress-bar p1"></div></div>
        </div>
        <div className="dashboard-card">
            <div className="card-title">Client Onboarding</div>
            <div className="card-progress"><div className="progress-bar p2"></div></div>
        </div>
        <div className="dashboard-chart">
            <div className="chart-bar bar-1"></div>
            <div className="chart-bar bar-2"></div>
            <div className="chart-bar bar-3"></div>
            <div className="chart-bar bar-4"></div>
            <div className="chart-bar bar-5"></div>
            <div className="chart-bar bar-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
