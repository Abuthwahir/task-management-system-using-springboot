import React from 'react';
import './LandingPage.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Section from './Section';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-blur-circles">
        <div className="blur-circle-1"></div>
        <div className="blur-circle-2"></div>
      </div>
      <Navbar />
      <main className="container">
        <Hero />
        <Section
          id="workflow"
          title="Plan and organize your daily workflow efficiently"
          isReversed={false}
          type="workflow"
        />
        <Section
          id="productivity"
          title="Track progress and stay productive"
          isReversed={true}
          type="productivity"
        />
        <Section
          id="cta"
          title="Start managing your tasks today"
          isReversed={false}
          type="cta"
        />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
