// shortlet/frontend/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApartmentForm from './components/ApartmentForm';
import HostDashboard from './components/HostDashboard';
import ListingDetail from './components/ListingDetail';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Shortlet</h1>
        </header>
        <main>
          <Routes>
            <Route path="/host-dashboard" element={<HostDashboard />} />
            <Route path="/listings/:id" element={<ListingDetail />} />
            <Route path="/" element={<p>Welcome to Shortlet! Go to /host-dashboard to begin.</p>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;