import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Intelligent <br />
                        <span className="text-accent">Analytics</span>
                    </h1>
                    <p className="hero-description">
                        Uniquely tailored to your Business needs
                    </p>
                    <button className="btn-primary">Learn More</button>
                </div>
                <div className="hero-video-wrapper">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="hero-video"
                    >
                        <source src="https://cdn.prod.website-files.com/678f3f0d7ee5353c8e54bb2b/678f3f0d7ee5353c8e54bce9_Awareye%20Home%20Video-transcode.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default Hero;
