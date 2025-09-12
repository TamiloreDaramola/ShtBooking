// shortlet/frontend/src/components/Home.jsx
import React from 'react';
import ListingList from './ListingList';

const Home = () => {
    return (
        <div className="home-container">
            <h2>Explore Our Listings</h2>
            <ListingList />
        </div>
    );
};

export default Home;