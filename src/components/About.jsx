import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-content">
                    <p className="about-text">
                        We exist to help organizations adopt <span className="text-accent">AI</span> and transform
                        to remain competitive and stay lean. Our expertise in computer vision, robotics, and
                        intelligent agents enables businesses to automate complex processes and unlock new
                        levels of efficiency.
                    </p>
                    <a href="#capabilities" className="about-link">Learn More →</a>
                </div>
            </div>
        </section>
    );
};

export default About;
