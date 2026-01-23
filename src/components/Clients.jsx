import React from 'react';
import './Clients.css';

const clients = [
    { name: "Gilead", logo: "https://logo.clearbit.com/gilead.com" },
    { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
    { name: "NCR", logo: "https://logo.clearbit.com/ncr.com" },
    { name: "Centric", logo: "https://logo.clearbit.com/centricconsulting.com" },
    { name: "L&T Infotech", logo: "https://logo.clearbit.com/ltimindtree.com" }
];

const testimonials = [
    {
        quote: "Eyeota's AI solutions transformed our quality control process, reducing defects by 40%.",
        name: "Rahul Bajaj",
        company: "Sujata Industries"
    },
    {
        quote: "The computer vision system they built has been a game-changer for our warehouse operations.",
        name: "Sujata Sharma",
        company: "Aarvy Healthcare"
    },
    {
        quote: "Professional team, cutting-edge technology, and exceptional results. Highly recommended.",
        name: "David Brown",
        company: "Tech Innovations"
    }
];

const Clients = () => {
    return (
        <section id="clients" className="section clients-section">
            <div className="clients-bg"></div>
            <div className="container clients-container">
                <h2 className="section-title">
                    Trusted <span className="text-accent">By</span>
                </h2>

                <div className="clients-logos">
                    {clients.map((client, index) => (
                        <div key={index} className="client-logo">
                            <img src={client.logo} alt={client.name} />
                        </div>
                    ))}
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div key={index} className="testimonial-card">
                            <span className="quote-mark">"</span>
                            <p className="testimonial-quote">{item.quote}</p>
                            <div className="testimonial-author">
                                <strong>{item.name}</strong>
                                <span>{item.company}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
