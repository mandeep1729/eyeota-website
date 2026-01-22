import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Intelligent <br />
                    <span className="text-accent">Automation</span>
                </h1>
                <p className="hero-description">
                    Empowering businesses with cutting-edge AI, Robotics, and Computer Vision solutions.
                </p>
                <button className="btn-primary">Get Started</button>
            </div>
            <div className="hero-video-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-robotic-arm-moving-in-futuristic-scene-30364-large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay"></div>
            </div>
        </section>
    );
};

export default Hero;
