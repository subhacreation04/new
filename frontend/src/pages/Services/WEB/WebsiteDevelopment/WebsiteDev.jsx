import React, { useState } from 'react';
import website from '../../../../assets/website.png';
import './WebsiteDev.css';
import Technology from '../../../Technology/Technology';
import Industries from '../../../Industries/Industries';
import click from '../../../../assets/cursor.gif';
import Footer from '../../../Footer/Footer';
import customDesign from '../../../../assets/Features/custom-website-designing-company.png';
import mobileResponsive from '../../../../assets/Features/mobileResponsive.png';
import seoImage from '../../../../assets/Features/seoImage.png';
import fastLoading from '../../../../assets/Features/fastLoading.png';
import securedWebsite from '../../../../assets/Features/securedWebsite.png';
import ClientSlider from '../../../ClientSlider/ClientSlider';
import { useNavigate } from 'react-router-dom';

const WebsiteDev = () => {
  const [activeFeature, setActiveFeature] = useState(1);
  const navigate = useNavigate();

  const features = [
    { id: 1, title: "Custom Design", description: "Tailored to match your brand identity and create a unique impression.", image: customDesign },
    { id: 2, title: "Mobile Responsive", description: "Optimized for seamless functionality across all devices and screen sizes.", image: mobileResponsive },
    { id: 3, title: "SEO Optimized", description: "Helps your website rank higher on search engines for better visibility.", image: seoImage },
    { id: 4, title: "Fast Loading Speed", description: "Improves user experience and ensures quick performance.", image: fastLoading },
    { id: 5, title: "Secure & Scalable", description: "Built with the latest security measures and scalable for growth.", image: securedWebsite },
  ];

  return (
    <>
      <div className="website-dev-container">
        <div className="website-content">
          <h1>Website Designing</h1>
          <h2>Subha Creation specializes in delivering creative and strategic solutions...</h2>
        </div>
        <div className="website-image">
          <img src={website} alt="Website Development" />
        </div>
      </div>

      <Technology />
      
      <div className="cta-section">
        <h2>Ready to Build Your Dream Website?</h2>
        <p>Let’s create a powerful online presence for your business with a custom-designed website.</p>
        <button className="cta-button" onClick={() => navigate('/contactus')}>Get Started Today</button>
      </div>
<br /><br />
      <div className='why'>
        <h2>Why Choose Our Website Development Services?</h2>
        <p>In today’s digital world, having a professional website is essential...</p>
      </div>

      <div className="webdev-services">
        <h2>Features</h2>
        <img src={click} alt="Click" className="click" />
        <div className="webdev-features">
          <div className="webdev-feature-list">
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                className={`webdev-feature-item ${activeFeature === feature.id ? 'active' : ''}`} 
                onClick={() => setActiveFeature(feature.id)} 
              >
                <div className="webdev-feature-number">{index + 1}</div>
                <h3 className="webdev-feature-title">{feature.title}</h3>
              </div>
            ))}
          </div>
          <div className="webdev-feature-details">
            {features.find(f => f.id === activeFeature) && (
              <>
                <img src={features.find(f => f.id === activeFeature).image} alt={features.find(f => f.id === activeFeature).title} />
                <p>{features.find(f => f.id === activeFeature).description}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Need a Consultation?</h2>
        <p>Contact our expert team to discuss your website needs and get a free quote.</p>
        <button className="cta-button" onClick={() => navigate('/contactus')}>Contact Us</button>
      </div>
      <br /><br />
 
      <Footer />
    </>
  );
};

export default WebsiteDev;
