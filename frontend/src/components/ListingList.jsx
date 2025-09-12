// shortlet/frontend/src/components/ListingList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListingList = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/v1/apartments/');
                setListings(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch listings.');
                setLoading(false);
                console.error('Error fetching listings:', err);
            }
        };

        fetchListings();
    }, []);

    if (loading) {
        return <div>Loading listings...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="listing-list-container">
            <h2>Available Listings</h2>
            {listings.length === 0 ? (
                <p>No listings available yet.</p>
            ) : (
                <div className="listings">
                    {listings.map(listing => (
                        <Link to={`/listings/${listing.id}`} key={listing.id} className="listing-card-link">
                            <div className="listing-card">
                                <h4>{listing.title}</h4>
                                <p><strong>Location:</strong> {listing.location}</p>
                                <p><strong>Price:</strong> ${listing.price_per_night} per night</p>
                                <p>{listing.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListingList;