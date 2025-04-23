import React from 'react';
import { motion } from 'framer-motion';
import './Ad.css';
import ad from '../../../../assets/adshoot.jpeg';
import processImage from '../../../../assets/new.jpg';
import ClientSlider from '../../../ClientSlider/ClientSlider';
import Footer from '../../../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Ad = () => {
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <>
    
      {/* Hero Section */}
      <motion.div className="ad-dev-container" initial="hidden" animate="visible" variants={fadeIn}>
        <div className="ad-content">
          <h1>Advertisement Shooting</h1>
          <h2>Bringing your brand to life with stunning and impactful advertisement visuals.</h2>
        </div>
        <motion.div className="ad-image" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1, transition: { duration: 0.6 } }}>
          <img src={ad} alt="Advertisement Shooting" />
        </motion.div>
      </motion.div>

      {/* Why Choose Our Ad Shooting Services */}
      <motion.div className="ad-benefits" initial="hidden" animate="visible" variants={staggerContainer}>
        <h2>Why Choose Our Advertisement Shooting Services?</h2>
        <div className="ad-benefits-grid">
          {[ 
            { title: "📸 High-Quality Production", desc: "We use cutting-edge technology to deliver premium-quality visuals that captivate audiences." },
            { title: "🎭 Creative Storytelling", desc: "Our expert team crafts compelling ad narratives that connect with your target audience emotionally." },
            { title: "📺 Multi-Platform Optimization", desc: "Ads designed for TV, social media, websites, and digital platforms to maximize reach." },
            { title: "🚀 High Engagement & ROI", desc: "We create persuasive advertisements that drive higher engagement and increase conversions." }
          ].map((item, index) => (
            <motion.div className="ad-benefit-card" key={index} variants={fadeIn}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section 1 */}
      <motion.div className="cta-section" initial="hidden" animate="visible" variants={fadeIn}>
        <h2>Boost Your Brand Visibility with Professional Advertisements</h2>
        <p>We help businesses create high-quality, visually stunning ads that leave a lasting impression.</p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="cta-button" onClick={() => navigate('/contact')}>
          Get Started Today
        </motion.button>
      </motion.div>

      {/* Ad Shooting Process */}
      <motion.div className="ad-process" initial="hidden" animate="visible" variants={staggerContainer}>
        <h2>Our Ad Shooting Process</h2>
        <div className="process-image-list">
          <motion.div className="process-steps" variants={staggerContainer}>
            {[ 
              { step: "01", title: "Concept Development", desc: "Understanding your brand’s vision and crafting a powerful advertisement concept." },
              { step: "02", title: "Script & Storyboard", desc: "Planning the storyline, scripting dialogues, and designing the visual elements." },
              { step: "03", title: "Shooting & Production", desc: "Using professional equipment and talent to capture stunning visuals." },
              { step: "04", title: "Editing & Post-Production", desc: "Adding effects, sound, and final touches to create a flawless advertisement." },
              { step: "05", title: "Final Delivery & Promotion", desc: "Optimizing the ad for different platforms and launching the campaign." },
              { step: "06", title: "Performance Analysis", desc: "Tracking engagement metrics and optimizing future campaigns for better results." }
            ].map((process, index) => (
              <motion.div className="process-card" key={index} variants={fadeIn}>
                <span>{process.step}</span>
                <h3>{process.title}</h3>
                <p>{process.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="process-image" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}>
            <img src={processImage} alt="Ad Shooting Process" />
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section 2 */}
      <motion.div className="cta-section" initial="hidden" animate="visible" variants={fadeIn}>
        <h2>Start Your Advertisement Campaign Now</h2>
        <p>Let’s create an impactful and engaging ad that elevates your brand and increases conversions.</p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="cta-button" onClick={() => navigate('/contact')}>
          Book a Free Consultation
        </motion.button>
      </motion.div>

      <br /><br />
 
      <Footer />
    </>
  );
};

export default Ad;
