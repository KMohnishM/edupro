import React from 'react';
import './HowItWorks.css';

const HowItWorksSection = () => {
    return (
        <section id="how-it-works">
            <div className="container">
                <h2>How It Works</h2>
                <div className="steps">
                    <div className="step">
                        <h3>Sign Up and Create Your Profile</h3>
                        <p>Join the platform and tell us about your interests and goals.</p>
                    </div>
                    <div className="step">
                        <h3>Explore and Choose a Project</h3>
                        <p>Browse through real-world challenges and select a project that excites you.</p>
                    </div>
                    <div className="step">
                        <h3>Collaborate and Learn</h3>
                        <p>Work with global peers and mentors, gain hands-on experience, and develop critical skills.</p>
                    </div>
                    <div className="step">
                        <h3>Showcase Your Work</h3>
                        <p>Build a digital portfolio of your completed projects and share it with potential employers or schools.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
