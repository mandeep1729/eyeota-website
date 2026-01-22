import React from 'react';
import './Clients.css';

const clients = [
    "GILEAD", "Wipro", "NCR", "L&T Information Technology", "Infosys", "Cognizant"
];

const Clients = () => {
    return (
        <section id="clients" className="section clients-section">
            <div className="container">
                <h2 className="section-title">Trusted <span className="text-accent">By</span></h2>
                <div className="clients-grid">
                    {clients.map((client, index) => (
                        <div key={index} className="client-logo">
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
