import React, { useState } from 'react';
import './content.css';
import content from '../../../../assets/content-marketing.jpg';
 import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ClientSlider from "../../../ClientSlider/ClientSlider";
import Footer from "../../../Footer/Footer";
import strategy from  '../../../../assets/Content/strategy.png';
import socialsharing from  '../../../../assets/Content/socialsharing.jpg';
import seo from  '../../../../assets/Content/seo.png';
import data from  '../../../../assets/Content/data.jfif';
import cs from  '../../../../assets/Content/cs.png';
import contentCreator from  '../../../../assets/Content/contentCreator.jfif';
const ContentM = () => {
 
  const [openFAQ, setOpenFAQ] = useState(null);
  const navigate = useNavigate(); // Hook to handle navigation

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
        
      {/* Content Marketing Section */}
      <div className="content-dev-container">
        <motion.div 
          className="content-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Content Marketing</h1>
          <h2>Bringing your brand to life with stunning and impactful content strategies.</h2>
        </motion.div>

        <motion.div 
          className="content-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={content} alt="Content Marketing" />
        </motion.div>
      </div>

      {/* Technology Section */}
      <div className="technology-section">
        <h2>Technologies We Use</h2>
        <motion.div 
          className="tech-grid"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="tech-card">SEO Tools</div>
          <div className="tech-card">Google Analytics</div>
          <div className="tech-card">CMS Platforms</div>
          <div className="tech-card">Social Media Automation</div>
          <div className="tech-card">AI Content Generators</div>
          <div className="tech-card">Email Marketing</div>
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <motion.div 
      className="cta-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Want to Boost Your Business?</h2>
      <p>Get in touch with us today and let’s create an impactful digital strategy for your brand.</p>
      <button className="cta-button" onClick={() => navigate('/contactus')}>
        Get a Free Consultation
      </button>
    </motion.div>


            {/* Why Choose Us Section */}
            <div className="content-marketing-benefits">
        <h2>Why Choose Us?</h2>
        <p>Discover what sets us apart in the world of content marketing.</p>
        <motion.div 
          className="content-marketing-benefits-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="content-marketing-benefit-card">
            <img src={strategy} alt="Proven Strategies" />
            <p>Proven Strategies</p>
          </div>
          <div className="content-marketing-benefit-card">
            <img src={contentCreator} alt="Expert Content Creators" />
            <p>Expert Content Creators</p>
          </div>
          <div className="content-marketing-benefit-card">
            <img src={data} alt="Data-Driven Approach" />
            <p>Data-Driven Approach</p>
          </div>
          <div className="content-marketing-benefit-card">
            <img src={seo} alt="SEO Optimization" />
            <p>SEO Optimization</p>
          </div>
          <div className="content-marketing-benefit-card">
            <img src={socialsharing} alt="Engaging and Shareable Content" />
            <p>Engaging and Shareable Content</p>
          </div>
          <div className="content-marketing-benefit-card">
            <img src={cs} alt="Customized Solutions" />
            <p>Customized Solutions</p>
          </div>
        </motion.div>
      </div>

      <br /><br /><br /><br /><br />
 
      <Footer />
    </div>
  );
};
  
export default ContentM;
