import React from 'react';
import { Link } from 'react-router-dom';
import './Service_list.css';
import web from '../../assets/web-development.png';
import app from '../../assets/mobile_app.jpg';
import digital from '../../assets/digital_marketing.png';
import graphic from '../../assets/graphic_design.jpg';

const serviceListData = [
  {
    title: "Web Development",
    description: "Innovative Web Design and Development Solutions...",
    image: web,
    path: "/services/websitedevelopment",
  },
  {
    title: "App Development",
    description: "Transforming Ideas into Powerful Mobile Apps...",
    image: app,
    path: "/services/mobile-development",
  },
  {
    title: "Graphic Designing",
    description: "Creative Media and Graphics Design Solutions...",
    image: graphic,
    path: "/services/visual-identity",
  },
  {
    title: "Digital Marketing",
    description: "Driving Business Growth and Building Brand Awareness Online...",
    image: digital,
    path: "/services/seo",
  },
];

const ServiceList = () => {
  return (
    <section className="service-list-section">
      <div className="service-list-container">
        {/* Section Title */}
        <h2 className="service-list-title">Let's Check Our Services</h2>
        
        {/* Cards Grid */}
        <div className="service-list-grid">
          {serviceListData.map((service, index) => (
            <div key={index} className="service-list-card">
              <img 
                src={service.image} 
                alt={`Service: ${service.title}`} 
                className="service-list-image" 
                loading="lazy"
              />
              <h3 className="service-list-card-title">{service.title}</h3>
              <p className="service-list-card-description">{service.description}</p>
              <Link to={service.path} onClick={() => window.scrollTo(0, 0)}>
                <button className="service-list-read-more">Read More →</button>
              </Link>
            </div>
          ))}
        </div>
        
        {/* "View All" Button */}
        <div className="service-list-view-all">
          <Link to="/services/websitedevelopment" onClick={() => window.scrollTo(0, 0)}>
            <button className="service-list-view-all-button">View All</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
