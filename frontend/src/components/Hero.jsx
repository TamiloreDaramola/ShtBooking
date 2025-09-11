// shortlet/frontend/src/components/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>
          Find Your Perfect Escape.
        </h1>
        <p>
          Discover luxury apartments and short-term rentals in your dream destination.
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Location, date, guests" />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;