// shortlet/frontend/src/components/ListingDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ListingDetail = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/apartments/${id}/`);
                setListing(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch listing.');
                setLoading(false);
                console.error('Error fetching listing:', err);
            }
        };

        fetchListing();
    }, [id]);

    if (loading) {
        return <div>Loading listing details...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!listing) {
        return <div>Listing not found.</div>;
    }

    return (
        <div className="listing-detail-container">
            <h2>{listing.title}</h2>
            <p><strong>Location:</strong> {listing.location}</p>
            <p><strong>Price:</strong> ${listing.price_per_night} per night</p>
            <p><strong>Description:</strong> {listing.description}</p>
            <p><strong>Created:</strong> {new Date(listing.created_at).toLocaleDateString()}</p>
        </div>
    );
};

export default ListingDetail;