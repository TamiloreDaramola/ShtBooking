// shortlet/frontend/src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // Import the new Logo component

const Header = ({ isAuthenticated, logout, isAdmin }) => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo-link">
                    {/* Replace the old h1 with the new Logo component */}
                    <Logo />
                </Link>
                <nav className="nav">
                    {isAuthenticated ? (
                        <>
                            <Link to="/listings" className="nav-link">Listings</Link>
                            {isAdmin && (
                                <Link to="/host-dashboard" className="nav-link">Dashboard</Link>
                            )}
                            <button onClick={logout} className="nav-button">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link">Login</Link>
                            <Link to="/register" className="nav-link">Register</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;