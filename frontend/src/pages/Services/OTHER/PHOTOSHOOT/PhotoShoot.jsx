import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PhotoShoot.css';
import photoshoot from '../../../../assets/photoshoot.jpg';
import camera from '../../../../assets/camera.jpg';
import ClientSlider from '../../../ClientSlider/ClientSlider';
import Footer from '../../../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const PhotoShoot = () => {
  const [activeFaq, setActiveFaq] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <motion.div className="photoshoot-dev-container" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false }}>
        <div className="photoshoot-content">
          <h1>Professional Photoshoot Services</h1>
          <h2>Capture stunning visuals that elevate your brand identity.</h2>
        </div>
        <div className="photoshoot-image">
          <img src={photoshoot} alt="Professional Photoshoot" />
        </div>
      </motion.div>

      {/* Why Choose Our Photoshoot Services */}
      <motion.div className="photoshoot-why-choose" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false }}>
        <h2>Why Choose Our Photoshoot Services?</h2>
        <br />
        <div className="photoshoot-benefits">
          <div className="benefit-item">📸 High-Quality Photography</div>
          <div className="benefit-item">🎨 Professional Editing</div>
          <div className="benefit-item">🏢 Studio & Outdoor Shoots</div>
          <div className="benefit-item">🕒 Quick Turnaround Time</div>
        </div>
      </motion.div>

      {/* CTA Section 1 */}
      <motion.div className="cta-section" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false }}>
        <h2>Need Stunning Photos for Your Brand?</h2>
        <p>Let's create visuals that leave a lasting impact.</p>
        <button className="cta-button" onClick={() => navigate('/contact')}>Book a Free Consultation</button>
      </motion.div>
      <br /> <br />

      {/* Our Photoshoot Process */}
      <motion.div className="photoshoot-process" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false }}>
        <h2>Our Photoshoot Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <h3>📌 Step 1: Consultation</h3>
            <p>We discuss your vision and requirements.</p>
          </div>
          <div className="process-step">
            <h3>🎥 Step 2: Photoshoot</h3>
            <p>Professional session with expert photographers.</p>
          </div>
          <div className="process-step">
            <h3>🎨 Step 3: Editing & Retouching</h3>
            <p>High-quality image enhancement.</p>
          </div>
          <div className="process-step">
            <h3>🚀 Step 4: Delivery</h3>
            <p>Quick turnaround with top-quality results.</p>
          </div>
        </div>
      </motion.div>

      {/* CTA Section 2 */}
      <motion.div className="cta-section" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false }}>
        <h2>Ready to Capture Stunning Moments?</h2>
        <p>Contact us now and let’s bring your vision to life.</p>
        <button className="cta-button" onClick={() => navigate('/contact')}>Get Started Now</button>
      </motion.div>

      {/* Types of Photoshoots */}
      <motion.div className="photoshoot-types" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false }}>
        <h2>Types of Photoshoots We Offer</h2>
        <br />
        <div className="types-grid">
          <div className="type-card">📷 Product Photography</div>
          <div className="type-card">👔 Corporate Headshots</div>
          <div className="type-card">🎭 Event Photography</div>
          <div className="type-card">🏠 Real Estate Photography</div>
          <div className="type-card">🌟 Fashion Photography</div>
          <div className="type-card">🎉 Wedding Photography</div>
        </div>
      </motion.div>
      <br />
      <Footer />
    </>
  );
};

export default PhotoShoot;
