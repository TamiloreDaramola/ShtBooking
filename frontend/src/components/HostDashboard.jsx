import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import ApartmentCard from './ApartmentCard';
import AddApartmentForm from './AddApartmentForm'; // Import the new form component

const HostDashboard = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { authTokens, logout } = useContext(AuthContext);

    useEffect(() => {
        const fetchHostListings = async () => {
            try {
                const response = await axios.get(
                    'http://127.0.0.1:8000/api/v1/apartments/host/', {
                        headers: {
                            'Authorization': `Bearer ${authTokens.access}`
                        }
                    }
                );
                setListings(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch your listings. Please try again later.');
                setLoading(false);
                console.error('Error fetching host listings:', err.response || err);
            }
        };

        if (authTokens) {
            fetchHostListings();
        }
    }, [authTokens]);

    if (loading) {
        return <div>Loading your listings...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="host-dashboard-container">
            <div className="dashboard-header">
                <h3>Your Apartment Listings</h3>
            </div>
            
            {/* The new form to add listings and photos */}
            <AddApartmentForm /> 
            
            {listings.length === 0 ? (
                <p>You have no listings yet. Create a new one to get started.</p>
            ) : (
                <div className="listing-grid">
                    {listings.map(listing => (
                        <ApartmentCard key={listing.id} listing={listing} />
                    ))}
                </div>
            )}
            
            <div className="logout-button-container">
                <button onClick={logout} className="logout-button">Logout</button>
            </div>
        </div>
    );
};

export default HostDashboard;