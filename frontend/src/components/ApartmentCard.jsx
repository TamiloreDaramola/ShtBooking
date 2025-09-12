// shortlet/frontend/src/components/ApartmentCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ApartmentCard = ({ listing }) => {
    const sampleImageUrl = 'https://images.unsplash.com/photo-1560518883-ce09292df293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';

    return (
        <Link to={`/listings/${listing.id}`} className="apartment-card-link">
            <div className="apartment-card">
                <img src={sampleImageUrl} alt={`Image of ${listing.title}`} className="apartment-image" />
                <div className="apartment-details">
                    <h4 className="apartment-title">{listing.title}</h4>
                    <p className="apartment-location">{listing.location}</p>
                    <p className="apartment-price">${listing.price_per_night} / night</p>
                </div>
            </div>
        </Link>
    );
};

export default ApartmentCard;