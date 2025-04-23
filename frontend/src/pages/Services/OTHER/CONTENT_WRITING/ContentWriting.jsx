import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContentWriting.css';
import { FaPenNib, FaChartLine, FaShareAlt, FaBullseye } from 'react-icons/fa';
import { IoLogoMarkdown } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import cw from '../../../../assets/ContentWriter.jpg';
import ClientSlider from '../../../ClientSlider/ClientSlider';
import Footer from '../../../Footer/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ContentWriting = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleFAQ = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div 
        className="contentWriting-hero-container" 
        initial="hidden" 
        whileInView="visible" 
        variants={fadeInUp} 
        viewport={{ once: false }}
      >
        <div className="contentWriting-hero-content">
          <h1>Content Writing</h1>
          <h2>We create powerful content that drives traffic, leads, and conversions.</h2>
        </div>
        <div className="contentWriting-hero-image">
          <img src={cw} alt="Content Writing" />
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div className="contentWriting-why-choose-us" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false }}>
        <h1>Why Choose Us?</h1>
        <ul>
          <li><FaPenNib /> Expert Writers & Strategists</li>
          <li><FaChartLine /> Data-Driven SEO Optimization</li>
          <li><FaShareAlt /> Engaging & Shareable Content</li>
          <li><FaBullseye /> Conversion-Focused Approach</li>
        </ul>
      </motion.div>

      {/* Comparison Table */}
      <motion.div className="contentWriting-comparison-table" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false }}>
        <h2>How We Compare</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Our Service</th>
              <th>Competitors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SEO Optimization</td>
              <td>✔ Advanced Data-Driven SEO</td>
              <td>✖ Basic SEO Practices</td>
            </tr>
            <tr>
              <td>Content Quality</td>
              <td>✔ High-Engagement, Research-Based</td>
              <td>✖ Generic, Low-Impact Content</td>
            </tr>
            <tr>
              <td>Industry Expertise</td>
              <td>✔ Specialized Niche Writers</td>
              <td>✖ Generalist Writers</td>
            </tr>
            <tr>
              <td>Conversion Rate Focus</td>
              <td>✔ Optimized for Lead Generation</td>
              <td>✖ No Strategic CTAs</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div className="contentWriting-cta-section" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false }}>
        <h2>Ready to Boost Your Content?</h2>
        <p>Let’s create powerful, engaging content that drives results for your business. Contact us today to get started!</p>
        <a href="/contact" className="contentWriting-cta-btn">Get In Touch</a>
      </motion.div>

      {/* Services Overview Section */}
      <motion.div className="contentWriting-services-overview" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false }}>
        <h2>Our Content Marketing Services</h2>
        <div className="contentWriting-services-grid">
          {[ 
            { icon: <FaBullseye />, title: 'Content Strategy', desc: 'Tailored strategies that engage your audience and boost brand visibility.' },
            { icon: <FaChartLine />, title: 'SEO Copywriting', desc: 'SEO-optimized content designed to rank and drive organic traffic.' },
            { icon: <IoLogoMarkdown />, title: 'Blog Writing', desc: 'Engaging and informative blog posts that position your brand as an expert.' },
            { icon: <FaShareAlt />, title: 'Social Media Content', desc: 'Creative posts that spark engagement and grow your social presence.' },
            { icon: <MdEmail />, title: 'Email Marketing Content', desc: 'Persuasive emails designed to drive conversions and nurture relationships.' },
            { icon: <FaPenNib />, title: 'Video & Visual Content', desc: 'Engaging video and visual content that captivates and converts.' }
          ].map((service, index) => (
            <motion.div 
              key={index} 
              className="contentWriting-service-card" 
              variants={fadeInUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: false }}
            >
              <div className="contentWriting-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="/contact" className="contentWriting-cta">Learn More</a>
            </motion.div>
          ))}
        </div>
      </motion.div>
 
      <Footer />
    </>
  );
};

export default ContentWriting;
