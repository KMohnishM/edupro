import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <header className="hero">
            <div className="container">
                <h1>Transform Education with Real-World Projects and Personalized Learning</h1>
                <p>Join a global community of learners solving real-world challenges through AI-powered, project-based education.</p>
                <div className="cta-buttons">
                    <a href="#signup" className="btn">Get Started Now</a>
                    <a href="#demo" className="btn">Watch Demo</a>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
