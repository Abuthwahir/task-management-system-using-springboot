import React, { useEffect } from 'react';
import './LandingPage.css';

const Header = () => {
  return (
    <header className="landing-header">
      <div className="container">
        <div className="logo">TASKIE</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="header-buttons">
          <a href="/user/login" className="btn btn-secondary">
            Login
          </a>
          <a href="/user/admin/register" className="btn btn-primary">
            Register
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Manage Your Tasks Smarter</h1>
          <p className="hero-subtitle">
            Organize, track, and collaborate on projects from start to finish.
            Boost your team's productivity with one simple tool.
          </p>
          <div className="hero-buttons">
            <a
              href="/user/admin/register"
              className="btn btn-primary btn-large"
            >
              Get Started
            </a>
            <a href="/user/login" className="btn btn-secondary btn-large">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-dashboard-mockup">
          <div className="mockup-header">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
          </div>
          <div className="mockup-body">
            <div className="mockup-sidebar">
              <div className="sidebar-item active"></div>
              <div className="sidebar-item"></div>
              <div className="sidebar-item"></div>
            </div>
            <div className="mockup-content">
              <div className="content-header"></div>
              <div className="content-card"></div>
              <div className="content-card small"></div>
              <div className="content-chart">
                <div className="bar b1"></div>
                <div className="bar b2"></div>
                <div className="bar b3"></div>
                <div className="bar b4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkflowSection = () => {
  return (
    <section id="features" className="workflow-section">
      <div className="container workflow-container">
        <div className="workflow-illustration">
          <div className="card-stack">
            <div className="card card1">
              <div className="card-header"></div>
              <div className="card-line"></div>
              <div className="card-line short"></div>
            </div>
            <div className="card card2">
              <div className="card-header"></div>
              <div className="card-line"></div>
              <div className="card-line short"></div>
            </div>
            <div className="card card3">
              <div className="card-header">
                <div className="check-item">
                  <div className="check-icon">✓</div>
                  <div className="check-line"></div>
                </div>
                <div className="check-item">
                  <div className="check-icon">✓</div>
                  <div className="check-line"></div>
                </div>
              </div>
              <div className="card-line"></div>
            </div>
          </div>
        </div>
        <div className="workflow-content">
          <h2 className="section-title">
            Plan and organize your daily workflow efficiently
          </h2>
          <p className="section-description">
            Create custom workflows, set priorities, and visualize your team’s
            progress with our intuitive drag-and-drop boards.
          </p>
        </div>
      </div>
    </section>
  );
};

const ProductivitySection = () => {
  return (
    <section className="productivity-section">
      <div className="container productivity-container">
        <div className="productivity-content">
          <h2 className="section-title">Track progress and stay productive</h2>
          <p className="section-description">
            Use our insightful analytics and reporting tools to monitor
            performance, identify bottlenecks, and keep your projects on track.
          </p>
        </div>
        <div className="productivity-illustration">
          <div className="graph-mockup">
            <div className="graph-header">
              <div className="graph-avatars">
                <div className="avatar"></div>
                <div className="avatar"></div>
                <div className="avatar"></div>
              </div>
            </div>
            <div className="graph-body">
              <div className="graph-bar-chart">
                <div className="g-bar g1"></div>
                <div className="g-bar g2"></div>
                <div className="g-bar g3"></div>
                <div className="g-bar g4"></div>
              </div>
              <div className="graph-pie-chart">
                <div className="pie-slice"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <h2 className="cta-title">Start managing your tasks today</h2>
        <p className="cta-subtitle">
          Join thousands of teams who use Taskie to get things done.
        </p>
        <a href="/user/admin/register" className="btn btn-primary btn-large">
          Get Started for Free
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="landing-footer">
      <div className="container footer-container">
        <div className="footer-column">
          <div className="logo">TASKIE</div>
          <p>The best way to manage your tasks.</p>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <a href="/about">About Us</a>
          <a href="#!">Careers</a>
          <a href="#!">Blog</a>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <a href="/contact">Contact Us</a>
          <a href="#!">Help Center</a>
          <a href="#!">Privacy Policy</a>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <a href="#!">Twitter</a>
          <a href="#!">LinkedIn</a>
          <a href="#!">Github</a>
        </div>
      </div>
    </footer>
  );
};

const LandingPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.landing-header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero />
        <WorkflowSection />
        <ProductivitySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
