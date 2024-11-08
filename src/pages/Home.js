// src/pages/Home.js
import React from 'react';
import CourseCard from '../components/CourseCard';
import coursesData from '../Data/coursesData';
import './Home.css'

function Home() {
  return (
    <div>
      <h1>Course Overview</h1>
      <div className="course-list">
        {coursesData.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}

export default Home;
