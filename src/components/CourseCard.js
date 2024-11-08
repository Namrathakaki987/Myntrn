// src/components/CourseCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

function CourseCard({ id, title, description, imageSrc, showPlacement }) {
  return (
    <div className="course-card">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {showPlacement && <div className="placement-info">Placement Assistance Available</div>}
      <Link to={`/courses/${id}`}>
        <button className="view-button">View Program</button>
      </Link>
    </div>
  );
}

export default CourseCard;

