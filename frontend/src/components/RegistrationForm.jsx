// shortlet/frontend/src/components/RegistrationForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';

const RegistrationForm = () => {
    // 1. Set up state to hold form data
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        is_host: false,
        is_guest: false,
    });

    // 2. Handle form input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // 3. Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the browser from reloading the page
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/v1/register/',
                formData,
            );
            console.log('Registration successful:', response.data);
            alert('Registration successful!');
        } catch (error) {
            console.error('Registration failed:', error.response.data);
            alert('Registration failed!');
        }
    };

    // 4. Render the form
    return (
        <div className="registration-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="registration-form">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
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
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="is_host"
                        checked={formData.is_host}
                        onChange={handleChange}
                    />
                    Register as Host
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="is_guest"
                        checked={formData.is_guest}
                        onChange={handleChange}
                    />
                    Register as Guest
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;