import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                     {/* Placeholder for Gear Icon - using emoji or SVG */}
                    <span className="logo-icon">⚙️</span>
                    <span className="logo-text">eyeota.ai</span>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="#about">About</a></li>
                        <li><a href="#capabilities">Capabilities</a></li>
                        <li><a href="#process">Process</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="cart-icon">
                    🛒
                </div>
            </div>
        </header>
    );
};

export default Header;
