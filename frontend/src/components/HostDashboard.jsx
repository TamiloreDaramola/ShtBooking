// shortlet/frontend/src/components/HostDashboard.js
import React from 'react';
import ApartmentForm from './ApartmentForm';
import './HostDashboard.css';

const HostDashboard = () => {
  return (
    <div className="host-dashboard-container">
      <h2>Host Dashboard</h2>
      <ApartmentForm />
    </div>
  );
};

export default HostDashboard;