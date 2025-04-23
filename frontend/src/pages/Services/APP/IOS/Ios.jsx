import React from 'react';
import { motion } from 'framer-motion';
import "./ios.css";
import ios from '../../../../assets/iOS-Application-Development.png';
import Technology from '../../../Technology/Technology';
import mobile from '../../../../assets/Graphic/Mobile-App-development.gif';
import ClientSlider from "../../../ClientSlider/ClientSlider"; 
import Footer from "../../../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const Ios = () => {
  const navigate = useNavigate(); 

  const techFeatures = [
    { title: "Expert iOS Developers", description: "Skilled in Swift, Objective-C & SwiftUI.", color: "#4CAF50" },
    { title: "App Store Guidelines Compliance", description: "Ensuring smooth approval & launch.", color: "#6A5ACD" },
    { title: "Secure & Scalable Solutions", description: "High-performance, optimized for iOS devices.", color: "#FF5722" },
    { title: "User-Centric UI/UX Design", description: "Intuitive and engaging user experiences.", color: "#008000" },
    { title: "Latest iOS Technologies", description: "ARKit, CoreML, AI, IoT & more.", color: "#1E90FF" },
    { title: "End-to-End Support", description: "From ideation to launch & maintenance.", color: "#DC143C" }
  ];

  const appServices = [
    { title: "Custom iOS App Development", description: "Tailor-made apps for startups & enterprises", icon: "📱" },
    { title: "Cross-Platform App Development", description: "Using Flutter & React Native", icon: "🌐" },
    { title: "Enterprise iOS App Development", description: "Streamlining business operations", icon: "🏢" },
    { title: "E-commerce & mCommerce Apps", description: "Secure & scalable online shopping apps", icon: "🛒" },
    { title: "App Store Optimization (ASO)", description: "Ensuring high visibility & downloads", icon: "🚀" },
    { title: "App Security & Data Protection", description: "GDPR & Apple’s security standards compliance", icon: "🔒" }
  ];

  return (
    <>
      <motion.div 
        className="app-dev-container"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="app-content">
          <h1>iOS App Development</h1>
          <h2>Transforming your vision into high-quality iOS applications with precision and innovation.</h2>
        </div>
        <div className="app-image">
          <motion.img 
            src={ios} 
            alt="App Development"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </motion.div>

      <Technology/>

      <motion.div 
        className="app-tech-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Why Choose Us</h2>
        <div className="app-tech-grid">
          {techFeatures.map((feature, index) => (
            <motion.div 
              key={index} 
              className="app-tech-item" 
              style={{ borderColor: feature.color }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="app-tech-icon" style={{ backgroundColor: feature.color }}>✔</div>
              <div className="app-tech-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Build a High-Performance iOS App for Your Business</h2>
        <p>Deliver a seamless user experience with a powerful, secure, and scalable iOS application.</p>
        <motion.button 
          className="cta-button" 
          onClick={() => navigate('/contact')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get a Free Consultation
        </motion.button>
      </motion.div>

      <motion.div 
        className="app-services-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <br /><br />
        <h2 className='service' style={{ color: "white" }}>Our Services (Types of iOS Apps)</h2>
        <br /><br />
        <div className="app-services-grid">
          {appServices.map((service, index) => (
            <motion.div 
              key={index} 
              className="app-service-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="app-service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>   
        <br /><br />
      </motion.div>

      <motion.div 
        className="app-newprocess"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our App Development Process</h1>
        <div className="app-image-content">
          <motion.img 
            src={mobile} 
            alt="Process"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <ul>
            <li>1️⃣ <b>Idea & Consultation</b> – Understanding business goals.</li>    
            <li>2️⃣ <b>UI/UX Design</b> – Creating visually stunning prototypes.</li> 
            <li>3️⃣ <b>Development</b> – Writing scalable and secure code.</li> 
            <li>4️⃣ <b>Testing & QA</b> – Eliminating bugs and optimizing performance.</li> 
            <li>5️⃣ <b>Launch & Deployment</b> – App Store publishing.</li> 
            <li>6️⃣ <b>Post-Launch Support</b> – Updates, maintenance, & scaling.</li>   
          </ul> 
        </div>
      </motion.div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <motion.div 
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Turn Your Vision into an Exceptional iOS App</h2>
        <p>We create stunning, feature-rich iOS apps tailored for your business and optimized for the App Store.</p>
        <motion.button 
          className="cta-button" 
          onClick={() => navigate('/contact')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start Your Project Today
        </motion.button>
      </motion.div>
 
      <br /><br /><br />
      <Footer />
    </>
  );
};

export default Ios;
