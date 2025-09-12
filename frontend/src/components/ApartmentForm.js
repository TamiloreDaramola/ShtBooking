// shortlet/frontend/src/components/ApartmentForm.js
import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Apartment data submitted:', formData);
    // Here is where we'll eventually send the data to the API.
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