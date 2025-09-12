// shortlet/frontend/src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo-link">
                    <h1 className="logo-text">Shortlet</h1>
                </Link>
                <nav className="nav">
                    {/* The navigation links are now gone */}
                </nav>
            </div>
        </header>
    );
};

export default Header;