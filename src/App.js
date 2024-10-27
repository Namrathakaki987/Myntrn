import React from 'react';
import './App.css';
import { FaUsers } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import img from './img/ms.jpeg';
import img1 from './img/hvac.jpeg';
import img2 from './img/da.jpeg';
import img3 from './img/mep.jpg';
import img4 from './img/cs.jpeg';
import img5 from './img/4.8.jpg';
import img6 from './img/jfswb.jpeg';
import img7 from './img/ai.jpeg';
import img8 from './img/ds.jpeg';
import img9 from './img/ml.jpeg';
import img10 from './img/top.jpeg';
import img11 from './img/s1.png';
import img12 from './img/s2.png';
import img13 from './img/s3.png';
import img14 from './img/s4.png';
import img15 from './img/pc-jfswb.jpeg';
import img16 from './img/pc-dse.jpeg';
import im1 from './img/1.png';
import im2 from './img/2.png';
import im3 from './img/3.png';
import im4 from './img/4.png';
import im5 from './img/5.png';
import im6 from './img/6.png';

function App() {
  return (
    <div className="App">
      <Top />
      <Header />
      <Myntrn />
      <ExplorePrograms1 />
      <ExplorePrograms />
      <CompanyLogos />
      <WhyMyntrn />
      <SuccessStories />
      <PlacementProcess />
      <Testimonials />
      <PopularCourses />
      <Footer />
    </div>
  );
}
function Top() {
  return (
    <div className="top-bar">
      <span>Discounts For Prinston Smart Engineers Students</span>
      <button className="apply-btn">Apply Now</button>
      <div className='br'>
        <br></br>
      </div>
    </div>


  );
}
function Header() {
  return (
    <div className="header">


      <div>
        <img src='https://myntrn.com/wp-content/uploads/2024/05/myntrn_logo-removebg-preview-2.png' alt='log' width={200} height={100} />
      </div>

      <div className='navItems'>
        <nav className='links' >
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Courses</a>
          <a href="#">Placements</a>
          <a href="#">Hire from us</a>
          <a href="#">Help</a>
          <a href="#">Resources</a>
        </nav>

      </div>

    </div>
  );
}

function Myntrn() {
  return (
    <section className="Myntrn">
      <br></br>
      <br></br>
      <h1>Myntrn Technology</h1>
      <h2>The Best Institute For Java Full Stack Developer Course<br></br>
        Trusted by over 25000+ students across India</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className='but1'>
        <button>Book Free Counselling</button>
        &nbsp;<button>Student Reviews</button></div>
      <br></br>
      <div className='br'>
        <br></br>
        <br></br>

      </div>

    </section>
  );
}
function ExplorePrograms() {
  return (
    <section className="explore-programs">
      <div className='br'>
        <br></br>
        <br></br>

      </div>
      <br></br>
      <br></br>
      <div className='but1'>
        <button>IT</button>
        &nbsp;<button>NON - IT</button></div>
      <h2>Explore Our Programs</h2>

      <div className="program-grid">
        <div className="program">
          <img src={img} alt="Program 1" />
          <h3>Mern Stack</h3>
          <div class="rating"> 4.8
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text"
            ><svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              class="star-solid"
            >
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path></svg
              ></label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text"
            ><svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              class="star-solid"
            >
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path></svg
              ></label>
            <input checked="" type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text"
            ><svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              class="star-solid"
            >
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path></svg
              ></label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text"
            ><svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              class="star-solid"
            >
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path></svg
              ></label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text"
            ><svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              class="star-solid"
            >
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path></svg
              ></label>
          </div>

          <div className='FaUsers'><FaUsers /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaRegClock /></div>
          <p>20K+ learners &nbsp;&nbsp;&nbsp;&nbsp;3 Months</p>
          <div className='but'>
            <button>View Program</button>
            &nbsp;<button>Enroll Now</button></div>
        </div>
        <div className="program">
          <img src={img1} alt="Program 2" />
          <h3>HVAC Design</h3>
          <div className='ratings'>4.8&nbsp;&nbsp;<MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></div>
          <div className='FaUsers'><FaUsers /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaRegClock /></div>
          <p>30K+ learners &nbsp;&nbsp;&nbsp;&nbsp;2 Months</p>
          <div className='but'>
            <button>View Program</button>
            &nbsp;<button>Enroll Now</button></div>
        </div>
        <div className="program">
          <img src={img3} alt="Program 3" />
          <h3>Mep Design</h3>
          <div className='ratings'>4.2&nbsp;&nbsp;<MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></div>
          <div className='FaUsers'><FaUsers /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaRegClock /></div>
          <p>25K+ learners &nbsp;&nbsp;&nbsp;&nbsp;3 Months</p>
          <div className='but'>
            <button>View Program</button>
            &nbsp;<button>Enroll Now</button></div>
        </div>
        <div className="program">
          <img src={img2} alt="Program 4" />
          <h3>Data Analytics</h3>
          <div className='ratings'>4.6&nbsp;&nbsp;<MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></div>
          <div className='FaUsers'><FaUsers /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaRegClock /></div>
          <p>13K+ learners &nbsp;&nbsp;&nbsp;&nbsp;2 Months</p>
          <div className='but'>
            <button>View Program</button>
            &nbsp;<button>Enroll Now</button></div>
        </div>
        <div className="program">
          <img src={img4} alt="Program 5" />
          <h3>Cyber Security</h3>
          <div className='ratings'>4.6&nbsp;&nbsp;<MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></div>
          <div className='FaUsers'><FaUsers /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaRegClock /></div>
          <p>7K+ learners &nbsp;&nbsp;&nbsp;&nbsp;2 Months</p>
          <div className='but'>
            <button>View Program</button>
            &nbsp;<button>Enroll Now</button></div>
          <div className='br'>
            <br></br>
            <br></br>

          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className='br'>
        <br></br>
        <br></br>

      </div>


    </section>

  );
}

function ExplorePrograms1() {
  return (
    <section className="explore-programs1">
      <h2>Explore Our Programs</h2>
      <div className='but1'>
        <button>IT</button>
        <button>NON - IT</button></div>
      <br></br>
      <div className="program-grid">
        <div className="program">
          <img src={img6} alt="Program " />
          <h3>Java Full Stack Web Development</h3>
          <div className='ratings'>4.8&nbsp;&nbsp;<MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></div>
          <div className='FaUsers'><FaUsers /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaRegClock /></div>
          <p>16K+ learners &nbsp;&nbsp;&nbsp;&nbsp;6 Months</p>
          <div className='but'>
            <button>View Program</button>
            &nbsp;<button>Enroll Now</button></div>
        </div>
        <div className="program">
          <img src={img7} alt="Program 2" />
          <h3>Artificial Intelligence</h3>
          <div className='ratings'>4.8&nbsp;&nbsp;<MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></div>
          <div className='FaUsers'><FaUsers />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaRegClock /></div>
          <p>5K+ learners &nbsp;&nbsp;&nbsp;&nbsp;2 Months</p>
          <div className='but'>
            <button>View Program</button>
            &nbsp;<button>Enroll Now</button></div>
        </div>
        <div className="program">
          <img src={img8} alt="Program 3" />
          <h3>Data Science</h3>
          <div className='ratings'>4.8&nbsp;&nbsp;<MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></div>
          <div className='FaUsers'><FaUsers /><p>&nbsp;&nbsp;&nbsp;&nbsp;10K+ learners</p></div>
          <div className='clock'><FaRegClock /><p>&nbsp;&nbsp;&nbsp;&nbsp;6 Months</p></div>

          <div className='but'>
            <button>View Program</button>
            &nbsp;<button>Enroll Now</button></div>
        </div>
        <div className="program">
          <img src={img9} alt="Program 4" />
          <h3>Machine Learning</h3>
          <div className='ratings'>4.8&nbsp;&nbsp;<MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></div>
          <div className='FaUsers'><FaUsers /><p>&nbsp;&nbsp;&nbsp;8K+ learners</p></div>
          <div className='clock'><FaRegClock /><p>&nbsp;&nbsp;&nbsp;2 Months</p></div>
          <div className='but'>
            <button>View Program</button>
            &nbsp;<button>Enroll Now</button></div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Our Testimonials </h2>
      <div className="testimonial-grid">
        <div className="testimonial">
          <p>Take feedback from<br></br>
            college professors<br></br>
            Photo<br></br>
            College<br></br>
            designation
          </p>

        </div>
        <div className="testimonial">
          <p>Take feedback from<br></br>
            college professors<br></br>
            Photo<br></br>
            College<br></br>
            designation
          </p>
        </div>
        <div className="testimonial">
          <p>Take feedback from<br></br>
            college professors<br></br>
            Photo<br></br>
            College<br></br>
            designation
          </p>
        </div>
        <div className="testimonial">
          <p>Take feedback from<br></br>
            college professors<br></br>
            Photo<br></br>
            College<br></br>
            designation
          </p>

        </div>
        <div className="testimonial">
          <p>Take feedback from<br></br>
            college professors<br></br>
            Photo<br></br>
            College<br></br>
            designation
          </p>

        </div>
        <div className="testimonial">
          <p>Take feedback from<br></br>
            college professors<br></br>
            Photo<br></br>
            College<br></br>
            designation
          </p>

        </div>
        <div className="testimonial">
          <p>Take feedback from<br></br>
            college professors<br></br>
            Photo<br></br>
            College<br></br>
            designation
          </p>

        </div>
        <div className="testimonial">
          <p>Take feedback from<br></br>
            college professors<br></br>
            Photo<br></br>
            College<br></br>
            designation
          </p>

        </div>
      </div>
    </section>
  );
}

function PopularCourses() {
  return (
    <section className="popular-courses">
      <h2>Popular Courses</h2>
      <div className="course-grid">
        <div className="course">
          <img src={img15} alt="Course 1" />
          <h3>Free Full Stack Web Developer</h3>
          <button>View Program</button>
          &nbsp;<button>Enroll Now</button>
        </div>
        <div className="course">
          <img src={img16} alt="Course 2" />
          <h3>Data Science</h3>
          <button>View Program</button>
          &nbsp;<button>Enroll Now</button>
        </div>
      </div>
    </section>
  );
}

function CompanyLogos() {
  return (
    <section className="company-logos">
      <h2>TOP Companies looking for Skilled Engineers</h2>
      <img src={img10} alt="Company 1" />
      <div className='br'>
        <br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br>

      </div>
    </section>
  );
}

function WhyMyntrn() {
  return (
    <section className="why-myntrn">
      <h2>Why <p> Myntrn Technology</p> is best for you?<br />- Skills Ke Liye &#128512;</h2>
      <div className="features-container">
        <div className="feature">
          <img src={im1} alt="Industry Professionals" />
        </div>
        <div className="feature">
          <img src={im2} alt="Affordable Fees" />

        </div>
        <div className="feature">
          <img src={im3} alt="Project Based Learning" />

        </div>
        <div className="feature">
          <img src={im4} alt="24x7 Support" />

        </div>
        <div className="feature">
          <img src={im5} alt="Placement Support" />

        </div>
        <div className="feature">
          <img src={im6} alt="Mock Interviews" />

        </div>
      </div>
    </section>
  );
};



function SuccessStories() {
  return (
    <section className="success-stories">
      <h2>Our Success Stories</h2>
      <div className="story-grid">
        <div className="story">
          <img src={img11} alt="Story 1" />
        </div>
        <div className="story">
          <img src={img12} alt="Story 2" />
        </div>
        <div className="story">
          <img src={img13} alt="Story 3" />
        </div>
        <div className="story">
          <img src={img14} alt="Story 4" />
        </div>
      </div>
      <div className='br'>
        <br></br>
        <br></br>

      </div>
    </section>
  );
}


const PlacementProcess = () => {
  const steps = [
    { title: "Eligibility Criteria", icon: "📋" },
    { title: "Placements Training", icon: "📊" },
    { title: "Interview Q & A", icon: "👥" },
    { title: "Resume Preparation", icon: "📝" },
    { title: "Aptitude Test", icon: "🧠" },
    { title: "Mock Interviews", icon: "🎤" },
    { title: "Scheduling Interviews", icon: "📅" },
    { title: "Job Placement", icon: "💼" },
  ];

  return (
    <div className="placement-process-container">
      <h3>Our Placement Process</h3>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="icon">{step.icon}</div>
            <p>{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Apply as Mentor</a></li>
            <li><a href="#">Sign up</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Industries</h3>
          <ul>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Data</a></li>
            <li><a href="#">Tech</a></li>
            <li><a href="#">Design</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Privacy & Policy</a></li>
            <li><a href="#">Terms & condition</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Faq</a></li>
            <li><a href="#">Payment and <br></br>Refund Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="social-media">
        <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
        <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
        <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
};

export default App