import React from 'react';
import './Email.css';
import email from '../../../../assets/Email-Marketing.jpg';
import Technology from '../../../Technology/Technology';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt,  faMobileAlt, faEnvelopeOpenText, faChartLine, faRobot, faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus, faPaintBrush, faFileAlt, faVial, faChartBar } from '@fortawesome/free-solid-svg-icons';
import types from '../../../../assets/types-of-email-marketing.jpg';
import emailGif from '../../../../assets/GIFs-in-Email.gif';
import ClientSlider from "../../../ClientSlider/ClientSlider";
import Footer from "../../../Footer/Footer";
import { useNavigate } from 'react-router-dom';
const Email = () => {
    const navigate = useNavigate(); // Hook to handle navigation
  
  return (
    <>
  
      <div className="email-dev-container">
        <div className="email-content">
          <h1>Email Marketing</h1>
          <h2>Boost customer loyalty and drive sales with result-driven email marketing campaigns.</h2>
        </div>
        <div className="email-image">
          <img src={email} alt="Email Development" />
        </div>
      </div>

      <Technology />

      {/* CTA Section 1 */}
      <div className="cta-section">
        <h2>Boost Your Conversions with Targeted Email Marketing</h2>
        <p>Engage your audience with personalized email campaigns that drive real results.</p>
        <button className="cta-button" onClick={() => navigate('/contact')}>Get a Free Strategy Session</button>
      </div>

      {/* Why Choose Our Email Marketing Services? */}
      <div className="email-why-choose-us">
        <h2>Why Choose Our Email Marketing Services?</h2>
        <div className="email-why-choose-container">
          {[
            { icon: faEnvelopeOpenText, title: "Personalized Email Campaigns", text: "We craft engaging, personalized messages tailored to your audience." },
            { icon: faChartLine, title: "High Open & Click-Through Rates", text: "Data-driven strategies that increase engagement." },
            { icon: faRobot, title: "Automation & AI-Powered Workflows", text: "Reach the right people at the right time automatically." },
            { icon: faMobileAlt, title: "Mobile-Optimized Designs", text: "Ensure your emails look great on any device." },
            { icon: faChartPie, title: "Detailed Analytics & Reporting", text: "Get insights into performance and ROI." },
            { icon: faShieldAlt, title: "GDPR & CAN-SPAM Compliant", text: "Stay legally compliant while marketing." }
          ].map((item, index) => (
            <div className="email-why-choose-item" key={index}>
              <div className="email-why-choose-circle">
                <div className="email-why-choose-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div className="email-why-choose-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="typesofEmail">
        <h1>Types of Email Campaigns We Offer </h1>
        
        <div className="types">


        <div className="typesimage">
          <img src={types} alt="" srcset="" />

         
          </div>
          <div className="typeslist">
            <ul>
              <li>Welcome Emails</li>
              <li>Promotional Emails</li>
              <li>Transactional Emails</li>
              <li>Drip Campaigns (Automated Emails)</li>
              <li>Newsletter Emails</li>
              <li>Re-engagement Emails</li>
              <li>Survey & Feedback Emails</li>
              <li>Event Invitation Emails</li>
              <li>Lead Nurturing Emails</li>
              <li>Internal Emails</li>
            </ul>
          </div>
        </div>

      </div>
<br />
       {/* Our Services Section */}
       <h2 >Our Services</h2>
       <div className="email-services"> 
        <div className="email-services-text">
         
          <div className="email-services-container">
            {[ 
              { icon: faEnvelopeOpenText, title: "Email Strategy & Planning", text: "We develop a custom email marketing strategy aligned with your business goals." },
              { icon: faUserPlus, title: "List Building & Management", text: "Grow and maintain a high-quality email subscriber list." },
              { icon: faPaintBrush, title: "Creative & Engaging Email Design", text: "Professionally designed emails that grab attention and drive action." },
              { icon: faRobot, title: "Personalized & Automated Campaigns", text: "Trigger-based emails, drip campaigns, and behavior-based automation." },
              { icon: faFileAlt, title: "Content Creation", text: "Compelling subject lines, engaging copy, and impactful call-to-actions." },
              { icon: faVial, title: "A/B Testing & Optimization", text: "Continuously improve email performance with data-driven insights." },
              { icon: faChartBar, title: "Performance Tracking & Reporting", text: "Get detailed analytics on open rates, click-through rates, and conversions." }
            ].map((item, index) => (
              <div className="email-service-item" key={index}>
                <div className="email-service-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div className="email-service-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="email-services-image">
          <img src={emailGif} alt="Email Marketing Services" />
        </div>
      </div>
    
        {/* CTA Section 2 */}
        <div className="cta-section">
          <h2>Turn Subscribers into Loyal Customers</h2>
          <p>Automate and optimize your email marketing to nurture leads and increase sales effortlessly.</p>
          <button className="cta-button" onClick={() => navigate('/contact')}>Start Your Email Campaign</button>
        </div>
 
            <br /><br /><br /><br /><br />
      <Footer />
    </>
  );
};

export default Email;