import React, { useState } from 'react';
import './form.css';

const NewTripForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Domestic',
    purpose: '',
    flightType: 'One-way',
    departFrom: '',
    destination: '',
    budgetLimit: '',
    checkIn: '',
    checkOut: '',
    hotel: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      {/* <h2>New Trip</h2> */}
      <form>

        <div className="itinerary-section">
          <h3>Add Data</h3>

          <label>Depart from*</label>
          <input
            type="text"
            name="departFrom"
            value={formData.departFrom}
            onChange={handleChange}
          />

          <label>Destination*</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          />

          <label>Budget limit*</label>
          <input
            type="text"
            name="budgetLimit"
            value={formData.budgetLimit}
            onChange={handleChange}
          />

          <h3>Accommodation</h3>

          <label>Check-in*</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
          />

          <label>Check-out*</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
          />

          <label>Hotel*</label>
          <input
            type="text"
            name="hotel"
            value={formData.hotel}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="button" className="save-draft-btn">
            Save draft
          </button>
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTripForm;
