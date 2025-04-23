import React from 'react';
import { motion } from 'framer-motion';
import './Methodologie.css';
import about from '../../../assets/about.jpg';
import Technology from '../../Technology/Technology';
import ClientSlider from "../../ClientSlider/ClientSlider";
import Footer from "../../Footer/Footer";
import method from "../../../assets/method.gif";

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

const Methodologie = () => {
  return (
    <>
      <motion.div className="method-dev-container" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeIn}>
        <div className="method-content">
          <h1>Our Methodology</h1>
          <h2>At Subha Creation, we follow a structured methodology to ensure seamless project execution.</h2>
        </div>
        <div className="method-image">
          <motion.img src={about} alt="About Us Development" variants={fadeIn} whileInView="visible" viewport={{ once: false }} />
        </div>
      </motion.div>

      <Technology />

      <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeIn}>
        At Subha Creation, we follow a structured methodology to ensure seamless project execution:
      </motion.h3>

      <motion.div className="methodology-section" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={staggerContainer}>
        <ul>
          <motion.li variants={fadeIn}><strong>1. Discovery & Requirement Gathering</strong> – Understanding business needs and market analysis.</motion.li>
          <motion.li variants={fadeIn}><strong>2. Planning & Strategy</strong> – Defining objectives, scope, and technology stack.</motion.li>
          <motion.li variants={fadeIn}><strong>3. Design & User Experience</strong> – Crafting user-centric, visually compelling designs.</motion.li>
          <motion.li variants={fadeIn}><strong>4. Development & Testing</strong> – Implementing robust, secure, and performance-optimized solutions.</motion.li>
          <motion.li variants={fadeIn}><strong>5. Content Integration & SEO</strong> – Enhancing search visibility and content placement.</motion.li>
          <motion.li variants={fadeIn}><strong>6. Deployment & Launch</strong> – Ensuring a smooth go-live experience.</motion.li>
          <motion.li variants={fadeIn}><strong>7. Maintenance & Support</strong> – Providing ongoing support and updates for long-term success.</motion.li>
        </ul>
        <motion.img src={method} alt="method" variants={fadeIn} whileInView="visible" viewport={{ once: false }} />
      </motion.div>

      <motion.div className="innovation-lab" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeIn}>
        <h2>Innovation Lab</h2>
        <p>At Subha Creation, we embrace innovation with our dedicated research & development lab. We experiment with AI, Blockchain, and emerging technologies to provide futuristic solutions.</p>
        <ul>
          <motion.li variants={fadeIn}>🚀 AI-driven business automation.</motion.li>
          <motion.li variants={fadeIn}>🚀 Blockchain-powered secure transactions.</motion.li>
          <motion.li variants={fadeIn}>🚀 IoT-enabled smart solutions.</motion.li>
          <motion.li variants={fadeIn}>🚀 AR/VR experiences for immersive interactions.</motion.li>
        </ul>
      </motion.div>

 
      <br /><br />
      <Footer />
    </>
  );
};

export default Methodologie;
