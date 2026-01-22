import React from 'react';
import './Process.css';

const steps = [
    { number: 1, title: "Requirement Analysis" },
    { number: 2, title: "Poker Planning" },
    { number: 3, title: "Daily Standup" },
    { number: 4, title: "Coffee & Code" },
    { number: 5, title: "Code Reviews" },
    { number: 6, title: "Automated Builds" }
];

const Process = () => {
    return (
        <section id="process" className="section process-section">
            <div className="container">
                <h2 className="section-title">Our <span className="text-accent">Process</span></h2>
                <div className="process-grid">
                    {steps.map((step) => (
                        <div key={step.number} className="process-card">
                            <div className="process-number">0{step.number}</div>
                            <h3 className="process-title">{step.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
