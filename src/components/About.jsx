import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">About <span className="text-accent">Us</span></h2>
                <div className="about-content">
                    <p className="about-text">
                        At <span className="text-accent">eyeota.ai</span>, we specialize in delivering intelligent automation solutions
                        that transform businesses. Our expertise spans across advanced robotics, computer vision,
                        and smart agent systems, designed to optimize efficiency and drive innovation.
                    </p>
                    <button className="btn-primary">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default About;
