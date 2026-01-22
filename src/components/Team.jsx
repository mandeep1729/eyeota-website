import React from 'react';
import './Team.css';

const Team = () => {
    return (
        <section id="team" className="section team-section">
            <div className="container">
                <h2 className="section-title">Our <span className="text-accent">Culture</span></h2>
                <div className="team-image-container">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
                        alt="Team Collaboration"
                        className="team-image"
                    />
                    <div className="team-overlay">
                        <p>Innovation born from collaboration.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
