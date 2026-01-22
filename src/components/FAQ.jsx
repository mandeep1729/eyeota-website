import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
    { question: "What industries do you serve?", answer: "We serve manufacturing, healthcare, logistics, and retail industries with our automation solutions." },
    { question: "Do you offer custom AI models?", answer: "Yes, we build and train custom AI models tailored to your specific business needs." },
    { question: "How long does implementation take?", answer: "Implementation timelines vary by project scope, typically ranging from 4 to 12 weeks." }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section faq-section">
            <div className="container">
                <h2 className="section-title">Common <span className="text-accent">Questions</span></h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                {faq.question}
                                <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
