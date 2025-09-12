// shortlet/frontend/src/App.jsx
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

// Import all components from the single 'components' folder
import Home from './components/Home';
import HostDashboard from './components/HostDashboard';
import ListingDetail from './components/ListingDetail';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import ListingList from './components/ListingList';
import Header from './components/Header';
import Hero from './components/Hero';
import ApartmentCard from './components/ApartmentCard';
import ApartmentGrid from './components/ApartmentGrid';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

// Import the authentication context
import { AuthProvider, AuthContext } from './context/AuthContext';

// Import all CSS files from the src folder
import './styles.css';
import './components/Header.css';
import './components/Hero.css';
import './components/ApartmentCard.css';
import './components/ApartmentGrid.css';
import './components/CallToAction.css';
import './components/Footer.css';

// The Landing Page component
const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <Hero />
            <div className="cta">
                <div className="cta-content">
                    <h2>Login to view our listings.</h2>
                    <div className="landing-buttons">
                        <Link to="/login" className="cta-button">Login</Link>
                        <Link to="/register" className="cta-button">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main application content that handles routing and uses context
const AppContent = () => {
    const { isAuthenticated, logout, isAdmin } = useContext(AuthContext);

    return (
        <div className="app-container">
            <Header isAuthenticated={isAuthenticated} logout={logout} isAdmin={isAdmin} />
            <main>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<UserLogin />} />
                    <Route path="/register" element={<UserRegistration />} />
                    <Route
                        path="/listings"
                        element={isAuthenticated ? <ApartmentGrid /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/host-dashboard"
                        element={isAdmin ? <HostDashboard /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/listings/:id"
                        element={<ListingDetail />}
                    />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

// The main App component with BrowserRouter and AuthProvider
const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppContent />
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;