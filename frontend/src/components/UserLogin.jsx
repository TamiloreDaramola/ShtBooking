// shortlet/frontend/src/components/UserLogin.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/login/',
        formData
      );
      login(response.data.access);
      alert('Login successful!');
    } catch (error) {
      console.error('Login failed:', error.response.data);
      alert('Login failed: ' + JSON.stringify(error.response.data));
    }
  };

  return (
    <div className="form-container">
      <h3>Login to Your Account</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;