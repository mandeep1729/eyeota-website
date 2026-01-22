import React from 'react';
import './Capabilities.css';

const services = [
    {
        title: "Analytics",
        icon: "📊",
        description: "Data-driven insights to power your decision making."
    },
    {
        title: "Smart Agents",
        icon: "🤖",
        description: "Intelligent autonomous agents handling complex workflows."
    },
    {
        title: "Computer Vision",
        icon: "👁️",
        description: "Advanced visual recognition and processing systems."
    },
    {
        title: "Robotics",
        icon: "🦾",
        description: "Next-gen robotic automation for industrial applications."
    }
];

const Capabilities = () => {
    return (
        <section id="capabilities" className="section capabilities-section">
            <div className="container">
                <h2 className="section-title">Our <span className="text-accent">Capabilities</span></h2>
                <div className="capabilities-grid">
                    {services.map((service, index) => (
                        <div key={index} className="capability-card">
                            <div className="card-icon">{service.icon}</div>
                            <h3 className="card-title">{service.title}</h3>
                            <p className="card-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
