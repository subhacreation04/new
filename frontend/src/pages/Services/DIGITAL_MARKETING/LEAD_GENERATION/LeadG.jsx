import React from 'react';
import './LeadG.css';
import leadg from '../../../../assets/unsplash-1.png';
import Technology from '../../../Technology/Technology';
import { motion } from 'framer-motion';
import ClientSlider from "../../../ClientSlider/ClientSlider";
import Footer from "../../../Footer/Footer";
import lead from '../../../../assets/leadgeneration.png';
const LeadG = () => {
  return (
    <>
 
      {/* Lead Generation & Analytics Section */}
      <div className="leadg-dev-container">
        <motion.div 
          className="leadg-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Lead Generation & Analytics</h1>
          <h2>Turn visitors into leads with data-driven marketing and insightful analytics.</h2>
        </motion.div>

        <motion.div 
          className="leadg-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={leadg} alt="Lead Generation & Analytics" />
        </motion.div>
      </div>

      {/* Technology Section */}
      <Technology />

      {/* 🔹 First Call to Action (CTA) - After Technology Section */}
      <motion.div 
        className="leadg-cta"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Boost Your Lead Generation Today!</h2>
        <p>Looking for a data-driven strategy to capture high-quality leads? Let’s build one together.</p>
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Schedule a Free Consultation
        </motion.button>
      </motion.div>

      {/* Why Lead Generation? */}
      <motion.div 
        className="leadg-benefits"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Why Lead Generation Matters?</h2>
        <p>Effective lead generation ensures a steady flow of potential customers, allowing businesses to grow and scale efficiently.</p>
       
       <div className="leadg-container">

        <div className="leadg-list">
        <ul>
          <li>✅ Convert website visitors into potential clients</li>
          <li>✅ Increase sales with high-quality leads</li>
          <li>✅ Optimize marketing strategies based on real-time data</li>
          <li>✅ Reduce customer acquisition costs</li>
          <li>✅ Strengthen customer relationships and brand credibility</li>
        </ul>
        </div>

        <div className="leadgeneration-image">
          <img src={lead} alt="Lead Generation" />
        </div>

       </div>

      </motion.div>

      {/* Lead Generation Strategies */}
      <motion.div 
        className="leadg-strategies"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Our Lead Generation Strategies</h2>
        <div className="strategies-grid">
          {strategies.map((strategy, index) => (
            <motion.div 
              className="strategy-card"
              key={index}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{strategy.title}</h3>
              <p>{strategy.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
{/* 🔹 Second Call to Action (CTA) - At the Bottom */}
<motion.div 
        className="leadg-cta-alt"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Ready to Grow Your Business?</h2>
        <p>Start generating high-quality leads with our expert strategies. Let's get started today!</p>
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started Now
        </motion.button>
      </motion.div>


      {/* Analytics & Performance Tracking */}
      <motion.div 
        className="leadg-analytics"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Analytics & Performance Tracking</h2>
        <p>We use cutting-edge analytics tools to track and refine marketing performance.</p>
        <div className="analytics-grid">
          {analyticsTools.map((tool, index) => (
            <motion.div 
              className="analytics-card"
              key={index}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      

    
      <br></br>
      <Footer />
    </>
  );
};

// Strategies Data
const strategies = [
  { title: "SEO & Content Marketing", description: "Attract organic traffic with high-ranking, valuable content and optimized keywords." },
  { title: "Social Media Advertising", description: "Leverage platforms like Facebook, LinkedIn, and Instagram to capture targeted leads." },
  { title: "Email Marketing", description: "Engage potential customers with personalized email campaigns and automated follow-ups." },
  { title: "Landing Pages & CTAs", description: "Optimize conversion rates with high-performing landing pages and strategic call-to-action buttons." }
];

// Analytics Data
const analyticsTools = [
  { title: "Google Analytics", description: "Monitor traffic, user behavior, and conversion rates to optimize marketing strategies." },
  { title: "CRM Integration", description: "Sync customer data with CRM systems for seamless lead management." },
  { title: "Heatmaps & User Behavior", description: "Analyze user interactions on your website for better UX and conversion optimization." },
  { title: "A/B Testing", description: "Test different versions of ads, emails, and landing pages to improve engagement." }
];

export default LeadG;
