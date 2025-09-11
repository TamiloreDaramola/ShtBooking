// shortlet/frontend/src/components/ApartmentCard.jsx
import React from 'react';
import './ApartmentCard.css';

const ApartmentCard = ({ apartment }) => {
  return (
    <div className="apartment-card">
      <div className="card-image">
        <img src={apartment.image} alt={apartment.name} />
      </div>
      <div className="card-content">
        <h3>{apartment.name}</h3>
        <p className="location">{apartment.location}</p>
        <p className="rate">${apartment.rate} / night</p>
        <button className="view-details-button">View Details</button>
      </div>
    </div>
  );
};

export default ApartmentCard;