import React from 'react';
import './FeatureSection.css';

const FeaturesSection = () => {
    return (
        <section id="features">
            <div className="container">
                <h2>Why Choose Our Platform?</h2>
                <div className="features-list">
                    <div className="feature-item">
                        {/* <img src="" alt="AI Personalization" /> */}
                        <h3>AI-Driven Personalization</h3>
                        <p>Tailor your learning journey with AI-powered recommendations that match your interests, strengths, and career goals.</p>
                    </div>
                    <div className="feature-item">
                        {/* <img src="https://via.placeholder.com/80" alt="Real-World Challenges" /> */}
                        <h3>Real-World Challenges</h3>
                        <p>Work on projects provided by leading organizations, gaining practical experience that matters.</p>
                    </div>
                    <div className="feature-item">
                        {/* <img src="https://via.placeholder.com/80" alt="Global Collaboration" /> */}
                        <h3>Global Collaboration</h3>
                        <p>Connect with peers and mentors from around the world, collaborate on projects, and learn from diverse perspectives.</p>
                    </div>
                    <div className="feature-item">
                        {/* <img src="https://via.placeholder.com/80" alt="Continuous Feedback" /> */}
                        <h3>Continuous Feedback</h3>
                        <p>Receive real-time, AI-assisted feedback on your work, helping you grow and improve every step of the way.</p>
                    </div>
                    <div className="feature-item">
                        {/* <img src="https://via.placeholder.com/80" alt="Sustainability and Social Impact" /> */}
                        <h3>Sustainability and Social Impact</h3>
                        <p>Choose projects that align with the UN SDGs, making a positive impact on the world.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
