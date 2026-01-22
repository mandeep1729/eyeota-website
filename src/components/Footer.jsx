import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-info">
                    <h3 className="footer-logo">eyeota.ai</h3>
                    <p>Automating the future.</p>
                </div>
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>hello@eyeota.ai</p>
                    <p>+1 (555) 123-4567</p>
                </div>
                <div className="footer-copyright">
                    <p>&copy; 2024 D. O'Reilly. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
