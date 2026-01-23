import React from 'react';
import './Process.css';

import requirementAnalysisImg from '../assets/requirement-analysis.avif';
import pokerPlanningImg from '../assets/poker-planning.avif';
import dailyStandupImg from '../assets/daily-standup.avif';
import coffeeCupImg from '../assets/coffee-cup.png';
import codeReviewsImg from '../assets/code-reviews.avif';
import automatedBuildImg from '../assets/automated-build.avif';

const steps = [
    {
        number: 1,
        title: "Requirement Analysis",
        description: "We dive deep into understanding your business needs, goals, and challenges to create a tailored AI solution.",
        image: requirementAnalysisImg
    },
    {
        number: 2,
        title: "Poker Planning",
        description: "Our team collaboratively estimates effort and prioritizes features using agile planning techniques.",
        image: pokerPlanningImg
    },
    {
        number: 3,
        title: "Daily Standup",
        description: "Quick daily sync meetings ensure transparent communication and rapid issue resolution.",
        image: dailyStandupImg
    },
    {
        number: 4,
        title: "Coffee & Code",
        description: "Where the magic happens - our engineers craft elegant solutions with precision and creativity.",
        image: coffeeCupImg
    },
    {
        number: 5,
        title: "Code Reviews",
        description: "Rigorous peer reviews ensure code quality, security, and adherence to best practices.",
        image: codeReviewsImg
    },
    {
        number: 6,
        title: "Automated Builds",
        description: "CI/CD pipelines automatically test, build, and deploy your solution with zero downtime.",
        image: automatedBuildImg
    }
];

const Process = () => {
    return (
        <section id="process" className="section process-section">
            <div className="container">
                <h2 className="section-title">Our <span className="text-accent">Process</span></h2>
                <div className="process-grid">
                    {steps.map((step) => (
                        <div key={step.number} className="process-card">
                            <div className="process-image">
                                <img src={step.image} alt={step.title} />
                            </div>
                            <div className="process-number">0{step.number}</div>
                            <h3 className="process-title">{step.title}</h3>
                            <p className="process-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
