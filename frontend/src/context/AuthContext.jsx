// shortlet/frontend/src/context/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => {
        const storedTokens = localStorage.getItem('authTokens');
        if (storedTokens && storedTokens !== 'undefined') {
            return JSON.parse(storedTokens);
        }
        return null;
    });

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser && storedUser !== 'undefined') {
            return JSON.parse(storedUser);
        }
        return null;
    });

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const login = (tokens, userData) => {
        setAuthTokens(tokens);
        setUser(userData);
        localStorage.setItem('authTokens', JSON.stringify(tokens));
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        localStorage.removeItem('user');
        navigate('/');
    };

    const isAuthenticated = !!authTokens;
    const isAdmin = user ? user.is_superuser : false;

    useEffect(() => {
        setLoading(false);
    }, []);

    const contextData = {
        user,
        authTokens,
        isAuthenticated,
        isAdmin,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};