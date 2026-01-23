import React from 'react';
import './Team.css';

const teamMembers = [
    {
        name: "Sophia",
        role: "Head of Automation",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    },
    {
        name: "Ethan",
        role: "Software Engineer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
        name: "Luisa",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
    }
];

const Team = () => {
    return (
        <section id="team" className="section team-section">
            <div className="container">
                <h2 className="section-title">
                    Meet the <span className="text-accent">Team</span>
                </h2>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member">
                            <div className="member-image">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
