// shortlet/frontend/src/components/LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = () => {
    // 1. Set up state for username and password
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // 2. Send the login request to the Django API
            const response = await axios.post(
                'http://127.0.0.1:8000/api/v1/login/',
                formData,
            );
            console.log('Login successful:', response.data);
            alert('Login successful!');
            // Here, we would typically save the tokens to local storage
            // so the user remains logged in.
            console.log("Access Token:", response.data.access);
        } catch (error) {
            console.error('Login failed:', error.response.data);
            alert('Login failed!');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;