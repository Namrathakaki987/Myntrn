import React from 'react';
import './Card.css'

function Card({ plan, label, duration, title, price, benefits }) {
  const handleEnrollClick = () => {
    // Placeholder for routing logic
    window.location.href = "/registration"; // Change "/registration" to the actual route when known
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{plan}</h3>
      </div>
      {label && <div className="label">{label}</div>}
      <div className="duration">{duration}</div>
      <div className="title">{title}</div>
      <div className="price">{price}</div>
      <p className="note">Enroll Now to get Early Bird Discounts</p>
      <div className="benefits-section">
        <h4>Benefits</h4>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <button className="enroll-button" onClick={handleEnrollClick}>
        Enroll Now
      </button>
    </div>
  );
}

export default Card;
