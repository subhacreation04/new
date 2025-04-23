import React from 'react';
import { motion } from 'framer-motion';
import './Hiring.css';
import about from '../../../assets/about.jpg';
import Technology from '../../Technology/Technology';
import ClientSlider from '../../ClientSlider/ClientSlider';
import Footer from '../../Footer/Footer';
import { FaLaptopCode, FaBullhorn, FaPaintBrush, FaEnvelope, FaPenFancy, FaHeadset, FaTasks } from 'react-icons/fa';

const jobOpenings = [
  { title: 'Web Developer', icon: <FaLaptopCode />, description: 'Experience with React, Angular, or Vue.js. Strong in JavaScript & API integrations.' },
  { title: 'Digital Marketing Executive', icon: <FaBullhorn />, description: 'Expertise in SEO, PPC, and social media marketing strategies.' },
  { title: 'UI/UX Designer', icon: <FaPaintBrush />, description: 'Proficient in Figma, Adobe XD, and wireframing tools.' },
  { title: 'Project Manager', icon: <FaTasks />, description: 'Experience in Agile methodologies, team coordination, and project execution.' },
  { title: 'Content Writer', icon: <FaPenFancy />, description: 'Strong writing skills, SEO knowledge, and experience in creating engaging digital content.' },
  { title: 'IT Support Specialist', icon: <FaHeadset />, description: 'Troubleshooting skills, system administration knowledge, and customer support experience.' }
];

const Hiring = () => {
  return (
    <>
      <motion.div className="hiring-dev-container" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
        <div className="hiring-content">
          <h1>We're Hiring!</h1>
          <h2>Subha Creation is a leading firm based in India with the primary objective to provide best services to improve the overall growth of our client’s business.</h2>
        </div>
        <div className="hiring-image">
          <img src={about} alt="About Us Development" />
        </div>
      </motion.div>
      <Technology />
      
      <motion.div className="hiring-header" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
        <h1>🚀 We're Hiring!</h1>
        <p>Join our dynamic team and build your future with us.</p>
      </motion.div>
      
      <motion.div className="hire" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
        <div className="why-join-us">
          <h2>Why Work With Us?</h2>
          <ul>
            <li>✅ Work in a creative & fast-growing tech environment</li>
            <li>✅ Competitive salary & growth opportunities</li>
            <li>✅ Flexible work schedule & remote options</li>
            <li>✅ Learning & development programs</li>
          </ul>
        </div>

        <div className="job-openings">
          <h2>📢 Current Openings</h2>
          <div className="jobs-list">
            {jobOpenings.map((job, index) => (
              <motion.div key={index} className="job-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: false }}>
                <span className="job-icon">{job.icon}</span>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      <motion.div className="apply-now" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
        <h2>📩 Apply Now</h2>
        <ul>
        <li><strong>Email:</strong> <a href="mailto:info@subhacreation.com">info@subhacreation.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:18002681979">18002681979</a></li>
        </ul>
      </motion.div>

  
      <br /><br /><br />
      <Footer />
    </>
  );
};

export default Hiring;
