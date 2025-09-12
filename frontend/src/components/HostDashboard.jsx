// shortlet/frontend/src/components/HostDashboard.jsx
import React from 'react';
import ApartmentForm from './ApartmentForm';
import ListingList from './ListingList';

const HostDashboard = () => {
  return (
    <div className="host-dashboard-container">
      <h2>Host Dashboard</h2>
      <ApartmentForm />
      <ListingList />
    </div>
  );
};

export default HostDashboard;