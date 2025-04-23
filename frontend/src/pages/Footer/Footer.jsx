import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Quick Links Section */}
        <div>
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/"  onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
            <li><Link to="/about-us"  onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
            <li><Link to="/services"  onClick={() => window.scrollTo(0, 0)}>Services</Link></li>
            <li><Link to="#">Packages</Link></li>
            <li><Link to="/contactus"  onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
            <li><Link to="#">Blog</Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h2>Services</h2>
          <ul>
            <li><Link to="/services/websitedevelopment"  onClick={() => window.scrollTo(0, 0)}>Website Designing</Link></li>
            <li><Link to="/services/graphicdesign"  onClick={() => window.scrollTo(0, 0)}>Graphic Designing</Link></li>
            <li><Link to="/services/mobile-development"  onClick={() => window.scrollTo(0, 0)}>App Development</Link></li>
            <li><Link to="/services/seo"  onClick={() => window.scrollTo(0, 0)}>Digital Marketing</Link></li>
            <li><Link to="/services/ad-films"  onClick={() => window.scrollTo(0, 0)}>Other Services</Link></li>
          </ul>
        </div>

        {/* Important Links Section */}
        <div>
          <h2>Important Links</h2>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2>Get In Touch</h2>
          <p className="contact-info">
            Location: B-132, Oshiwara Industrial center, Off New Link Rd., Opp. Goregaon Bus Depot, Goregaon (W), Mumbai - 400 104.
          </p>
          <p className="contact-info">Email: info@subhacreation.com</p>
          <p className="contact-info">Toll Free : 18002681979</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>
          Copyright © {new Date().getFullYear()} Subha Creation. Design & Developed by 
          <a href="https://subhacreation.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' , textDecoration:"none" }}>Subha Creation </a>
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/subhacreationproduction/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com/CreationSubha" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/subhacreationproduction" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/subhacreationproduction" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
