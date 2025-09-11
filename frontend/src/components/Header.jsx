// shortlet/frontend/src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">Shortlet.</div>
        <nav className="nav">
          <a href="/apartments">Home</a>
          <a href="/apartments">Apartments</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
      </div>
    </header>
  );
};

export default Header;