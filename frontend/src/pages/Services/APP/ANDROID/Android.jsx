import React from 'react';
import { motion } from 'framer-motion';
import './Android.css';
import androidappdevelopment from '../../../../assets/Android-App-Development.jpg';
import Technology from '../../../Technology/Technology';
import mobile from '../../../../assets/Mobile-App-development.gif';
import ClientSlider from "../../../ClientSlider/ClientSlider"; 
import Footer from "../../../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const Android = () => {
  const navigate = useNavigate();

  const techFeatures = [
    { title: "Custom & Scalable Solutions", description: "Tailored to your business.", color: "#4CAF50" },
    { title: "Secure & Optimized Apps", description: "Fast, responsive, and protected.", color: "#6A5ACD" },
    { title: "Google Play Deployment", description: "Hassle-free launch & optimization.", color: "#FF5722" },
    { title: "Continuous Support", description: "App maintenance & updates.", color: "#008000" },
    { title: "Cross-Platform Compatibility", description: "Seamless experience across devices.", color: "#1E90FF" },
    { title: "AI & ML Integration", description: "Smart, data-driven applications.", color: "#DC143C" }
  ];

  const appServices = [
    { title: "Native Android Apps", description: "Kotlin, Java", icon: "📱" },
    { title: "Cross-Platform Apps", description: "Flutter, React Native", icon: "🌐" },
    { title: "E-commerce Apps", description: "Secure payments, real-time tracking", icon: "🛒" },
    { title: "On-Demand Apps", description: "Taxi, food delivery", icon: "🚗" },
    { title: "Enterprise Apps", description: "For internal business operations", icon: "🏢" },
    { title: "IoT & Wearable Apps", description: "Smart devices & tracking", icon: "📊" }
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
          <h1>Android App Development</h1>
          <h2>Transforming your vision into innovative Android apps with precision and passion.</h2>
        </div>
        <div className="app-image">
          <motion.img 
            src={androidappdevelopment} 
            alt="App Development"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </motion.div>

      <Technology />

      <motion.div 
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Build a Powerful Android App for Your Business</h2>
        <p>Leverage cutting-edge technology to create fast, scalable, and user-friendly Android applications.</p>
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
        className="app-services-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <br /><br />
        <h2 className="service" style={{ color: "white" }}>Our Services (Types of Android Apps)</h2>
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
            <li>5️⃣ <b>Launch & Deployment</b> – Google Play Store publishing.</li> 
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
        <h2>Transform Your Idea into a Feature-Rich Android App</h2>
        <p>We design and develop high-performance apps tailored to your business needs and audience.</p>
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

export default Android;
