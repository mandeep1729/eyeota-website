import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <span className="logo-icon">⚙️</span>
                    <span className="logo-text">eyeota.ai</span>
                </div>
                <div className="header-right">
                    <nav className="nav">
                        <ul className="nav-list">
                            <li><a href="#about">About</a></li>
                            <li><a href="#capabilities">Capabilities</a></li>
                            <li><a href="#process">Process</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
