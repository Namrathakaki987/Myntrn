// src/components/CourseDetails.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import coursesData from '../Data/coursesData';
import './CourseDetails.css';
import plansData from '../Data/plansData';
import Card from './Card';
import profileImage from './profile.png'
import feedbacks from '../Data/feedbackData';
import faqs from '../Data/faqsData';

function CourseDetails() {
  const { courseId } = useParams();
  const [openIndex, setOpenIndex] = useState(null);
  const course = coursesData.find((c) => c.id.toLowerCase() === courseId.toLowerCase());

  if (!course) {
    return <div>Course not found</div>;
  }

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="course-details">
      <h1>{course.title}</h1>
      <img src={course.imageSrc} alt={course.title} />
      <p>{course.details}</p>
      <ul>
        {course.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    
    <div className="course-details">
        <h1>Here’s Why You Need to Master <br/>{course.title}</h1>
        
      </div>
      
      {/* Move info banner to a new div below the heading */}
      <div className="info-banner">
        <div className="info-item">
          <p>10k+</p>
          <span>Job Opening</span>
        </div>
        <div className="info-item">
          <p>64 Billion</p>
          <span>Global Market Size</span>
        </div>
        <div className="info-item">
          <p>5 LPA+</p>
          <span>Average Annual Salary</span>
        </div>
      </div>



      <div className="container">
        {plansData.map((plan, index) => (
          <Card
            key={index}
            plan={plan.plan}
            label={plan.label}
            duration={plan.duration}
            title={plan.title}
            price={plan.price}
            benefits={plan.benefits}
          />
        ))}

      </div>
      <div className="course-header">
      <div className="course-title">{course.title}:</div>
      <div className="course-intro">{course.additional_desc}</div>
      <div className="join-text">{course.commonmsg}</div>
    </div>

    <div className='Syllabus'><h2>Syllabus</h2>
    <p>{course.syllabus}</p></div>

    <div className="container2">
      <div className="header2">
        <h1>Certify your Upskilling</h1>
        <p>WE WILL GIVE TWO CERTIFICATES OUR OWN DESIGN</p>
      </div>
      <div className="certificates">
        <img src={course.certificate} alt="Certificate 1" className="certificate" />
        
      </div>
    </div>



    <div className="expert-section">
      <h1>Learn from Industry Experts</h1>
      <p>
        Our expert instructors bring industry experience to help you build the
        fundamentals in an engaging learning environment.
      </p>
      <div className="profiles">
        <div className="profile-card">
          <img src={profileImage} alt="Akash" className="profile-pic" />
          <div className="profile-info">
            <h3>Mr. Akash</h3>
            <p>Data Scientist</p>
          </div>
        </div>
        <div className="profile-card">
          <img src={profileImage} alt="Abhishek" className="profile-pic" />
          <div className="profile-info">
            <h3>Abhishek</h3>
            <p>MERN-STACK DEVELOPER</p>
          </div>
        </div>
        <div className="profile-card">
          <img src={profileImage} alt="Aditya" className="profile-pic" />
          <div className="profile-info">
            <h3>Aditya</h3>
            <p>Full Stack Developer</p>
          </div>
        </div>
        <div className="profile-card">
          <img src={profileImage} alt="Imtiyaz" className="profile-pic" />
          <div className="profile-info">
            <h3>Imtiyaz</h3>
            <p>MEP Engineer</p>
          </div>
        </div>
      </div>
    </div>


    <div className="feedback-section">
      <h1>What our learners say about Programs?</h1>
      <div className="feedback-grid">
        {feedbacks.map((feedback, index) => (
          <div className="feedback-card" key={index}>
            <img src={feedback.photo} alt={feedback.name} className="feedback-photo" />
            <p className="feedback-description">{feedback.description}</p>
            <p className="feedback-name">{feedback.name}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{index + 1}. {faq.question}</span>
              <span className={`faq-arrow ${openIndex === index ? 'open' : ''}`}>&#x25BC;</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>




    </>

  
  );
}

export default CourseDetails;
