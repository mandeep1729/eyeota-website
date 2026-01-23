import React from 'react';
import './Hero.css';
import heroVideo from '../assets/airport-construction-pharma.mp4';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Empower Your Business <br />
                    with <span className="text-accent">AI</span>
                </h1>
                <p className="hero-description">
                    Unlock the power of Automation, Data Analytics, and Intelligent Agents
                    to transform your business operations.
                </p>
                <button className="btn-primary">Contact Us</button>
            </div>
            <div className="hero-video-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-video-overlay"></div>
            </div>
        </section>
    );
};

export default Hero;
