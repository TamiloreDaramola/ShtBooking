// shortlet/frontend/src/components/ApartmentForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ApartmentForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    price_per_night: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Your updated access token. This is a temporary solution.
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU3NjcxMzQ3LCJpYXQiOjE3NTc2NzEwNDcsImp0aSI6IjRhZGExZGQ5ZDRlNTQ1MzA5ZmE5MzI4NzU5MTc4OTAzIiwidXNlcl9pZCI6IjMifQ.fT6l688JBXq7D547Zci7Imkl1yIJNNsJB7QknfuVJWY';

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/apartments/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log('Listing created successfully:', response.data);
      alert('Apartment listing created successfully!');
      setFormData({
        title: '',
        description: '',
        location: '',
        price_per_night: '',
      });
    } catch (error) {
      console.error('There was an error creating the listing:', error.response.data);
      alert('Error: ' + JSON.stringify(error.response.data));
    }
  };

  return (
    <div className="form-container">
      <h3>Create a New Apartment Listing</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_per_night">Price per Night</label>
          <input
            type="number"
            id="price_per_night"
            name="price_per_night"
            value={formData.price_per_night}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
};

export default ApartmentForm;