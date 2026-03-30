import React from 'react';
import { Link } from 'react-router-dom';

const ScrollSection = ({ id, title, buttonText, buttonLink }) => {
    return (
        <section id={id} className="scroll-section">
            <div className="content">
                <h2>{title}</h2>
                {buttonText && buttonLink && (
                    <Link to={buttonLink} className="btn-cta">{buttonText}</Link>
                )}
            </div>
        </section>
    );
};

export default ScrollSection;
