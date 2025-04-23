import React from 'react';
import { motion } from 'framer-motion';
import './Vision.css';
import about from '../../../assets/about.jpg';
import Technology from '../../Technology/Technology';
import ClientSlider from '../../ClientSlider/ClientSlider';
import Footer from '../../Footer/Footer';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Vision = () => {
  return (
    <>
      <motion.div 
        className="vision-dev-container" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }} 
        variants={fadeIn}
      >
        <div className="vision-content">
          <h1>Vision & Mission</h1>
          <h2>
            Subha Creation is a leading firm based in India with the primary objective to provide the best services to improve the overall growth of our client’s business.
          </h2>
        </div>
        <div className="vision-image">
          <motion.img 
            src={about} 
            alt="About Us Development" 
            variants={fadeIn} 
            viewport={{ once: false }} 
          />
        </div>
      </motion.div>
      
      <Technology />

      <motion.div 
        className="vision" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }} 
        variants={fadeIn}
      >
        <h3>Our Vision</h3>
        <br /><br />
        <p>
          To be the most successful and respected professional and quality photography solution provider in India that is admired for its brands, innovation, and results. We collaborate with a diverse range of companies in India and globally. Our market sector experience spans across Financial, Engineering, Information Technology, Art, E-commerce, Legal, Non-Profit organizations, Hospitality, Fashion, Merchandising, Export companies, and small to medium-sized businesses.
        </p>
      </motion.div>

      <br /><br />
      <motion.div 
        className="core" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }} 
        variants={staggerContainer}
      >
        <h3>Our Core Values</h3>
        <br /><br />
        <ul>
          <motion.li variants={fadeIn}><strong>Quality</strong><br /> We are committed to delivering high-quality solutions for medium to large enterprises.</motion.li>
          <motion.li variants={fadeIn}><strong>Consistency</strong><br /> Over 14 years of experience in providing consistent and efficient solutions.</motion.li>
          <motion.li variants={fadeIn}><strong>Responsibility</strong><br /> We take full responsibility for delivering services that exceed client expectations.</motion.li>
          <motion.li variants={fadeIn}><strong>Creativity</strong><br /> Our innovative, result-oriented solutions drive continuous business growth.</motion.li>
        </ul>
      </motion.div>

      <br /><br />
      <motion.div 
        className="mission" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }} 
        variants={fadeIn}
      >
        <h3>Our Mission</h3>
        <p>
          Partner proactively with our customers to deliver professional photo finishing services, including digital photo prints. As a leading IT solutions firm in India, we are driven by the goal of accelerating business growth through cutting-edge digital services. With over a decade of industry expertise, unmatched technical skills, and strategic innovation, we provide cost-effective solutions tailored for success.
        </p>
        <br /><br />
        <ul>
          <motion.li variants={fadeIn}>To consistently deliver products and services that adhere to global standards.</motion.li>
          <motion.li variants={fadeIn}>To leverage emerging technologies for creative innovations.</motion.li>
          <motion.li variants={fadeIn}>To inspire individuals and businesses to reach their fullest potential.</motion.li>
        </ul>
      </motion.div>
      <br /><br />
      <Footer />
    </>
  );
};

export default Vision;
