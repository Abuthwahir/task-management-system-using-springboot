import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css';

const WorkflowIllustration = () => (
    <div className="section-illustration workflow-illustration">
        <div className="workflow-card">
            <div className="icon plan">P</div>
            <div className="text">Plan your projects</div>
        </div>
        <div className="workflow-card">
            <div className="icon organize">O</div>
            <div className="text">Organize your tasks</div>
        </div>
        <div className="workflow-card">
            <div className="icon plan">C</div>
            <div className="text">Collaborate with your team</div>
        </div>
    </div>
);

const ProductivityIllustration = () => (
    <div className="section-illustration productivity-illustration">
        <div className="productivity-avatars">
            <div className="avatar a1"></div>
            <div className="avatar a2"></div>
            <div className="avatar a3"></div>
        </div>
        <div className="productivity-chart">
            <div className="chart-line"></div>
        </div>
    </div>
);


const Section = ({ id, title, isReversed, type }) => {

    const Illustration = () => {
        switch(type) {
            case 'workflow':
                return <WorkflowIllustration />;
            case 'productivity':
                return <ProductivityIllustration />;
            default:
                return null;
        }
    }

    if (type === 'cta') {
        return (
            <section className="cta-section" id={id}>
                <h2>{title}</h2>
                <Link to="/register" className="btn primary">Get Started</Link>
            </section>
        );
    }
    
    return (
        <section className={`section ${isReversed ? 'reversed' : ''}`} id={id}>
            <div className="section-content">
                <h2>{title}</h2>
            </div>
            <Illustration />
        </section>
    );
};

export default Section;
