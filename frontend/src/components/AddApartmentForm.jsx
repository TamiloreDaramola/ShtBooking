// shortlet/frontend/src/components/AddApartmentForm.jsx

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const AddApartmentForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price_per_night: '',
        location: '',
    });
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [message, setMessage] = useState('');
    const { authTokens } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setSelectedFiles(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData object
        const form = new FormData();
        form.append('title', formData.title);
        form.append('description', formData.description);
        form.append('price_per_night', formData.price_per_night);
        form.append('location', formData.location);

        // Append each selected file to the FormData object
        if (selectedFiles) {
            for (const file of selectedFiles) {
                form.append('images', file);
            }
        }

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/v1/apartments/create_with_images/',
                form,
                {
                    headers: {
                        'Authorization': `Bearer ${authTokens.access}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            setMessage('Apartment listing created successfully!');
            // Clear the form after successful submission
            setFormData({
                title: '',
                description: '',
                price_per_night: '',
                location: '',
            });
            setSelectedFiles(null);
            console.log(response.data);
        } catch (error) {
            setMessage('Failed to create apartment listing. Please try again.');
            console.error('Error creating apartment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h3>Add a New Apartment</h3>
            <div className="form-group">
                <label>Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Price per night</label>
                <input type="number" name="price_per_night" value={formData.price_per_night} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Location</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Upload Images</label>
                <input type="file" name="images" multiple onChange={handleFileChange} accept="image/*" />
            </div>
            <button type="submit">Create Listing</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default AddApartmentForm;