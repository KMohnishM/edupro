import React from 'react';

import HeroSection from './components/Herosection';
import FeaturesSection from './components/FeatureSection';
import HowItWorksSection from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <CallToAction />
            <Footer />
        </div>
    );
}

export default App;
