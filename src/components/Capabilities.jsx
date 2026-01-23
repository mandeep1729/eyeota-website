import React from 'react';
import './Capabilities.css';

const capabilities = [
    {
        title: "Computer Vision",
        description: "We power automation with Computer Vision, and advanced ML—streamlining business processes, ensuring compliance, and detecting anomalies with precision. From workflows to digital twins, we help organizations digitalize everything for a smarter, faster future.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
    },
    {
        title: "Smart Agents",
        description: "Our expertise in smart agents, MCP servers, and seamless LLM integrations brings intelligence into your applications—transforming both client interactions and system processes into smarter, more value-driven experiences.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
    },
    {
        title: "Robotics",
        description: "We integrate AI with robotics and machinery—powering quadrupeds, drones, and conveyors for next-generation automation. From intelligent surveillance to smart material handling, our solutions streamline operations, boost productivity, and redefine human-machine collaboration.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80"
    }
];

const Capabilities = () => {
    return (
        <section id="capabilities" className="section capabilities-section">
            <div className="container">
                <h2 className="capabilities-heading">Capabilities</h2>
                <div className="capabilities-list">
                    {capabilities.map((item, index) => (
                        <div key={index} className="capability-row">
                            <div className="capability-title-section">
                                <div className="capability-bar"></div>
                                <h3 className="capability-title">{item.title}</h3>
                            </div>
                            <p className="capability-description">{item.description}</p>
                            <div className="capability-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
