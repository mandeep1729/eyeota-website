import React from 'react';
import './Capabilities.css';

const capabilities = [
    {
        title: "Computer Vision",
        description: "Advanced visual recognition systems that transform how you monitor, analyze, and respond to real-world environments. From quality inspection to safety monitoring.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
    },
    {
        title: "Smart Agents",
        description: "Intelligent autonomous agents that handle complex workflows, make decisions, and continuously learn to optimize your business processes.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
    },
    {
        title: "Robotics",
        description: "We integrate AI with robotics to create autonomous systems that can navigate, manipulate, and interact with the physical world safely and efficiently.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80"
    }
];

const Capabilities = () => {
    return (
        <section id="capabilities" className="section capabilities-section">
            <div className="container">
                <h2 className="section-title">
                    Our <span className="text-accent">Capabilities</span>
                </h2>
                <div className="capabilities-grid">
                    {capabilities.map((item, index) => (
                        <div key={index} className="capability-card">
                            <div className="capability-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="capability-content">
                                <h3 className="capability-title">{item.title}</h3>
                                <p className="capability-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
