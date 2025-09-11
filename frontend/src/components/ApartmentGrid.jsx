// shortlet/frontend/src/components/ApartmentGrid.jsx
import React from 'react';
import ApartmentCard from './ApartmentCard';
import './ApartmentGrid.css';

// Placeholder data
const apartments = [
  { id: 1, name: 'Minimalist Loft', location: 'New York, USA', rate: 250, image: 'https://via.placeholder.com/400x300.png/000000/FFFFFF?text=Apartment+1' },
  { id: 2, name: 'Modern Studio', location: 'London, UK', rate: 180, image: 'https://via.placeholder.com/400x300.png/000000/FFFFFF?text=Apartment+2' },
  { id: 3, name: 'Timeless Retreat', location: 'Paris, France', rate: 320, image: 'https://via.placeholder.com/400x300.png/000000/FFFFFF?text=Apartment+3' },
  { id: 4, name: 'Elegant Suite', location: 'Tokyo, Japan', rate: 280, image: 'https://via.placeholder.com/400x300.png/000000/FFFFFF?text=Apartment+4' },
];

const ApartmentGrid = () => {
  return (
    <section className="apartment-grid-section">
      <div className="container">
        <h2>Apartment Listings</h2>
        <div className="grid">
          {apartments.map(apartment => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentGrid;