import React from 'react';
import './Hero.css';

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
                    <source src="https://video.wixstatic.com/video/c837a6_c0b8ad24b7b74dc4aaf7f0e6b2c3f8c1/1080p/mp4/file.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-video-overlay"></div>
            </div>
        </section>
    );
};

export default Hero;
