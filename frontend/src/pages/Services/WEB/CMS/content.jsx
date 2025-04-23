import React from "react";
import "./content.css";
import cms from "../../../../assets/cms_main.jpg";
import cmsGif from "../../../../assets/cms.gif";
import wordpress from "../../../../assets/wordpress.png";
import shopify from "../../../../assets/shopify.png";
import magento from "../../../../assets/magento.png";
import joomla from "../../../../assets/joomla.png";
import drupal from "../../../../assets/drupal.png";
import wix from "../../../../assets/wix.png";
import Technology from "../../../Technology/Technology";
import ClientSlider from "../../../ClientSlider/ClientSlider";
import Footer from "../../../Footer/Footer";
import { useNavigate } from "react-router-dom";
const Content = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <>
       {/* Hero Section */}
      <div className="cms-dev-container">
        <div className="cms-content">
          <h1>CMS Based Design</h1>
          <h2>
          We build user-friendly, scalable, and secure CMS websites tailored to your needs.

          </h2>
        </div>
        <div className="cms-image">
          <img src={cms} alt="CMS Development" />
        </div>
      </div>
      <Technology />

      {/* CTA Section 1 */}
      <div className="cta-section">
         <h2>Ready to Simplify Website Management?</h2>
         <p>Get a user-friendly, scalable, and secure CMS website tailored to your business needs.</p>
         <br />
         <button className="cta-button" onClick={() => navigate('/contact')} >Get Started</button>
      </div>
    
      {/* Section 2: Why Choose CMS? */}
      <div className="cms-benefits">
        <h2>Why CMS? The Smart Choice for Website Management</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <span>✔️</span>
            <h3>Easy to Use</h3>
            <p>Manage your website without technical knowledge.</p>
          </div>
          <div className="benefit-card">
            <span>📈</span>
            <h3>SEO-Friendly</h3>
            <p>CMS platforms come with built-in SEO tools.</p>
          </div>
          <div className="benefit-card">
            <span>🎨</span>
            <h3>Highly Customizable</h3>
            <p>Use themes, plugins, and extensions.</p>
          </div>
          <div className="benefit-card">
            <span>🔒</span>
            <h3>Secure & Scalable</h3>
            <p>Regular updates and robust security measures.</p>
          </div>
          <div className="benefit-card">
            <span>💰</span>
            <h3>Cost-Effective</h3>
            <p>No need to hire a developer for every change.</p>
          </div>
          <div className="benefit-card">
            <span>👥</span>
            <h3>Multi-User Access</h3>
            <p>Multiple team members can manage content.</p>
          </div>
        </div>
      </div>

      {/* Section 3: CMS Platforms We Work With */}
      <div className="cms-platforms">
        <h2>We Work With the Best CMS Platforms</h2>
        <div className="platform-slider">
          <div className="platform-card">
            <img src={wordpress} alt="WordPress" />
            <h3>WordPress</h3>
            <p>Best for blogs, portfolios, and business sites.</p>
          </div>
          <div className="platform-card">
            <img src={shopify} alt="Shopify" />
            <h3>Shopify</h3>
            <p>Ideal for e-commerce stores.</p>
          </div>
          <div className="platform-card">
            <img src={magento} alt="Magento" />
            <h3>Magento</h3>
            <p>Advanced e-commerce platform.</p>
          </div>
          <div className="platform-card">
            <img src={joomla} alt="Joomla" />
            <h3>Joomla</h3>
            <p>Enterprise-level CMS.</p>
          </div>
          <div className="platform-card">
            <img src={drupal} alt="Drupal" />
            <h3>Drupal</h3>
            <p>Robust for large organizations.</p>
          </div>
          <div className="platform-card">
            <img src={wix} alt="Wix" />
            <h3>Wix</h3>
            <p>Robust for large organizations.</p>
          </div>
        </div>
      </div>

          {/* CTA Section 1 */}
          <div className="cta-section">
         <h2>Get Expert CMS Consultation Today!</h2>
         <p>Not sure which CMS suits your business? Our experts are here to guide you.</p>
         <br />
         <button className="cta-button" onClick={() => navigate('/contact')} >Get Started</button>
      </div>

     
 

 
      <br></br>
      <br></br>
      <Footer />



    </>
  );
};

export default Content;
