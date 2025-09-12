import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header = ({ isAuthenticated, logout, isAdmin }) => {
    const location = useLocation();
    const isPublicPageWithoutNav = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register';

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo-link">
                    <Logo />
                </Link>
                <nav className="nav">
                    {isAuthenticated ? (
                        <>
                            {/* Authenticated links */}
                            <Link to="/listings" className="nav-link">Listings</Link>
                            {isAdmin && (
                                <Link to="/host-dashboard" className="nav-link">Dashboard</Link>
                            )}
                        </>
                    ) : (
                        <>
                            {/* Conditionally render login/register links */}
                            {!isPublicPageWithoutNav && (
                                <>
                                    <Link to="/login" className="nav-link">Login</Link>
                                    <Link to="/register" className="nav-link">Register</Link>
                                </>
                            )}
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;