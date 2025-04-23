import React from 'react';
import spa from '../../../../assets/spa-main.jfif';
import './Spa.css';
import Technology from '../../../Technology/Technology';
import { FaRocket, FaMobileAlt, FaBolt, FaDatabase, FaSearch, FaCogs, FaTachometerAlt, FaLock, FaTools } from 'react-icons/fa';
import process from "../../../../assets/our-process.gif"
import ClientSlider from "../../../ClientSlider/ClientSlider";
import Footer from "../../../Footer/Footer";
import { useNavigate } from 'react-router-dom';
const Spa = () => {
  const navigate = useNavigate(); // Hook to handle navigation
  const processSteps = [
    { title: "Requirement Analysis", description: "Understanding client needs." },
    { title: "UI/UX Design", description: "Creating intuitive and attractive designs." },
    { title: "Development", description: "Coding frontend and backend with best practices." },
    { title: "API Integration", description: "Connecting with databases and third-party services." },
    { title: "Testing & Debugging", description: "Ensuring smooth performance." },
    { title: "Deployment & Maintenance", description: "Launching and offering support." },
  ];

  return (
    
    <>
       <div className="spa-dev-container">
        <div className="spa-content">
          <h1>Single Page Application (SPAs)</h1>
          <h2>
            We develop highly interactive, fast, and scalable SPAs using the latest technologies.
          </h2>
        </div>
        <div className="spa-image">
          <img src={spa} alt="SPA Development" />
        </div>
      </div>

      <Technology />

      <div className="cta-section">
         <h2>Revolutionize Your Web App with a Lightning-Fast SPA</h2>
         <p>Enhance user experience with seamless navigation, real-time updates, and ultra-fast performance.</p>
        <button className="cta-button" onClick={() => navigate('/contact')}>Get a Free Consultation</button>
      </div>

      {/* Why Choose Us Section */}
      <div className="spa-why-choose">
        <h2>Why Choose Us?</h2>
        <div className="spa-why-choose-cards">
          <div className="spa-card spa-highlighted"><FaBolt className="spa-icon" /><h3>Fast Performance</h3><p>Only loads essential resources, reducing load time.</p></div>
          <div className="spa-card  "><FaRocket className="spa-icon" /><h3>Better User Experience</h3><p>No page refreshes, smoother navigation.</p></div>
          <div className="spa-card spa-highlighted"><FaMobileAlt className="spa-icon" /><h3>Enhanced Mobile Experience</h3><p>Works well on mobile devices.</p></div>
          <div className="spa-card  "><FaDatabase className="spa-icon" /><h3>Efficient Data Fetching</h3><p>Uses APIs to fetch and update content dynamically.</p></div>
          <div className="spa-card spa-highlighted"><FaSearch className="spa-icon" /><h3>SEO Optimizations Available</h3><p>With server-side rendering (SSR) techniques like Next.js.</p></div>
          <div className="spa-card"><FaCogs className="spa-icon" /><h3>Custom Solutions</h3><p>We build tailored SPAs as per your needs.</p></div>
          <div className="spa-card spa-highlighted"><FaTachometerAlt className="spa-icon" /><h3>Performance Optimized</h3><p>Fast, scalable, and efficient applications.</p></div>
          <div className="spa-card "><FaLock className="spa-icon" /><h3>Security Focused</h3><p>Implementing best security practices.</p></div>
          <div className="spa-card spa-highlighted"><FaTools className="spa-icon" /><h3>Ongoing Support</h3><p>Maintenance and updates for long-term success.</p></div>
        </div>
      </div>

{/* Development Process Section */}
<h2 className='process-text'>Our Development Process</h2> 
<div className="spa-process-container">

  <div className="spa-process-steps">
    {processSteps.map((step, index) => (
      <div key={index} className={`spa-step ${index === processSteps.length - 1 ? "spa-last-step" : ""}`}>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    ))}
  </div>
  <img src={process} className='process' alt="Development Process" />
</div>

{/* CTA Section 2 */}
<div className="cta-section">
  <h2>Build a Scalable, High-Performance SPA</h2>
  <p>Our expert SPA development services ensure smooth interactions, reduced load times, and an engaging user experience.</p>
  <button className="cta-button" onClick={() => navigate('/contact')}>Let's Get Started</button>
</div>
 
      <br></br>
      <Footer />
    </>
  );
};

export default Spa;
