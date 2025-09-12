// shortlet/frontend/src/components/ApartmentGrid.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import ApartmentCard from './ApartmentCard';

const ApartmentGrid = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { authTokens } = useContext(AuthContext);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                // Log the token to ensure it's being retrieved
                console.log('Attempting to fetch listings with token:', authTokens ? 'Token is present' : 'No token');
                const config = authTokens ? {
                    headers: { 'Authorization': `Bearer ${authTokens.access}` }
                } : {};
                const response = await axios.get('http://127.0.0.1:8000/api/v1/apartments/', config);
                setListings(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch listings. Please try again later.');
                setLoading(false);
                console.error('Error fetching listings:', err);
            }
        };

        fetchListings();
    }, [authTokens]);

    if (loading) {
        return <div>Loading listings...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="apartment-grid-container">
            {listings.length === 0 ? (
                <p>No listings are available at the moment. Please check back later.</p>
            ) : (
                <div className="apartment-grid">
                    {listings.map(listing => (
                        <ApartmentCard key={listing.id} listing={listing} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ApartmentGrid;