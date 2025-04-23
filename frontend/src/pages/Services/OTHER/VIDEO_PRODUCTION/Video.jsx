import React from 'react';
import { motion } from 'framer-motion';
import './Video.css';
import video from '../../../../assets/videoproduction.jpg';
import videoGif from '../../../../assets/video.gif';
import process from '../../../../assets/video_process.png';
import ClientSlider from '../../../ClientSlider/ClientSlider';
import Footer from '../../../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const benefits = [
  { id: 1, title: 'Enhanced Brand Visibility', description: 'Boost your brand presence with high-quality video content.' },
  { id: 2, title: 'Increased Audience Engagement', description: "Capture and hold your audience's attention more effectively." },
  { id: 3, title: 'Improved Conversion Rates', description: 'Convert more leads into customers through engaging visuals.' },
  { id: 4, title: 'Versatile Content Creation', description: 'Create videos for social media, ads, websites, and more.' },
  { id: 5, title: 'Strengthened Customer Connections', description: 'Build trust and loyalty with impactful storytelling.' }
];

const videoTypes = [
  { id: 1, title: 'Brand/Company Video' },
  { id: 3, title: 'Industry-Specific Video' },
  { id: 4, title: 'Product Video' },
  { id: 5, title: 'Social Media Video' },
  { id: 6, title: 'TV Commercial' },
  { id: 7, title: 'Website Video' }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Video = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <motion.div className="video-dev-container" initial="hidden" animate="visible" variants={fadeInUp}>
        <div className="video-content">
          <h1>Video Production</h1>
          <h2>Creative & Impactful Video Production Services.</h2>
        </div>
        <div className="video-image">
          <img src={video} alt="Video Production" />
        </div>
      </motion.div>

      {/* Why Video Production */}
      <motion.div className="video-context" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
        <h3>Why Video Production?</h3>
        <p>Video production has evolved dramatically, making it accessible to both professionals and amateurs.</p>
      </motion.div>

      <motion.div className="video-gif" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
        <img src={videoGif} alt="Video Production" />
      </motion.div>

      {/* Call to Action Section */}
      <motion.div className="video-cta" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
        <h3>Ready to Elevate Your Brand with Stunning Videos?</h3>
        <p>Contact us today to discuss your video production needs.</p>
        <button className="cta-button" onClick={() => navigate('/contact')}>Get Started</button>
      </motion.div>

      {/* Benefits Section with Cards */}
      <motion.div className="video-benefits" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
        <h3>Benefits of Video Production</h3>
        <div className="benefits-container">
          {benefits.map((benefit) => (
            <motion.div key={benefit.id} className="benefit-card" variants={fadeInUp}>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Types of Video Production */}
      <motion.div className="video-types" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
        <h3>What We Provide in Video Production</h3>
        <div className="types-grid">
          {videoTypes.map((type) => (
            <motion.div key={type.id} className="type-box" variants={fadeInUp}>
              <h4>{type.title}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Video Production Process */}
      <motion.div className="video-process-image" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}>
        <h1>Our Video Production Process</h1>
        <img src={process} alt="Video Production" />
      </motion.div>

 
      <br />
      <Footer />
    </>
  );
};

export default Video;
