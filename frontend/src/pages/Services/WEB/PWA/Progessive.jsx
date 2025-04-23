import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './pwa.css';
import pwa from '../../../../assets/pwa.png';
import processImage from '../../../../assets/process.gif';
import Technology from '../../../Technology/Technology';
import Industries from '../../../Industries/Industries';
import question from '../../../../assets/questioon.gif';
import ClientSlider from "../../../ClientSlider/ClientSlider";
import Footer from "../../../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

const Progressive = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(1);

  const faqs = [
    { id: 1, title: "What is a Progressive Web App (PWA)?", description: "A PWA is a type of web application that offers a native app-like experience with features like offline access, push notifications, and fast performance." },
    { id: 2, title: "How is a PWA different from a native mobile app?", description: "Unlike native apps, PWAs don’t require installation from an app store and work directly from a web browser, making them more accessible and cost-effective." },
    { id: 3, title: "Can a PWA work offline?", description: "Yes! Thanks to service workers, PWAs can cache data and function even without an internet connection." },
    { id: 4, title: "Do PWAs work on all devices?", description: "Yes, PWAs are built to work across desktops, tablets, and mobile devices seamlessly." },
    { id: 5, title: "Can I migrate my existing website into a PWA?", description: "Yes! We offer PWA migration services to transform your existing website into a high-performing Progressive Web App." },
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.div 
        className="pwa-dev-container"
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Runs animation on scroll both up & down
      >
        <div className="pwa-content">
          <h1>Progressive Web App Development</h1>
          <h2>At Subha Creation, we craft fast, reliable PWAs that deliver an app-like experience across all devices, even offline.</h2>
        </div>
        <motion.div 
          className="pwa-image"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={pwa} alt="Development" />
        </motion.div>
      </motion.div>

      <Technology />

      {/* CTA Section */}
      <motion.div 
        className="cta-section"
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2>Transform Your Website into a Lightning-Fast Progressive Web App</h2>
        <p>Stay ahead of the competition with a PWA that offers speed, offline access, and an app-like experience.</p>
        <button className="cta-button" onClick={() => navigate('/contactus')}>Get a Free Consultation</button>
      </motion.div>

      {/* Why Choose PWA Section */}
      <motion.div 
        className="pwa-why-choose-section"
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2>Why Choose Progressive Web Apps?</h2>
        <h4>Discover the key benefits of PWAs and how they enhance user experience.</h4>

        <div className="pwa-hexagon-container">
          {[
            { number: '01', title: '🚀 Blazing Fast', desc: 'PWAs load instantly and work smoothly, even on slow networks.' },
            { number: '02', title: '📶 Offline Access', desc: 'Works without an internet connection, ensuring uninterrupted access.' },
            { number: '03', title: '🔔 Push Notifications', desc: 'Engage users with real-time updates and alerts, just like native apps.' },
            { number: '04', title: '📱 App-Like Feel', desc: 'Provides a full-screen, immersive experience with smooth animations.' },
            { number: '05', title: '🔎 SEO Friendly', desc: 'Indexed by search engines, improving visibility and discoverability.' },
            { number: '06', title: '💰 Cost-Effective', desc: 'Develop once, run everywhere—saving time and reducing costs.' }
          ].map((item, index) => (
            <motion.div 
              className="pwa-hexagon-wrapper" 
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="pwa-hexagon">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div 
        className="pwa-process-section"
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="process-content">
          <h2>Process Excellence</h2>
          <div className="process-cards">
            {[
              { id: "01", title: "Custom PWA Development", desc: "Tailored solutions based on business needs." },
              { id: "02", title: "PWA Migration", desc: "Convert existing websites into PWAs." },
              { id: "03", title: "Performance Optimization", desc: "Speed and efficiency improvements." },
              { id: "04", title: "PWA Maintenance & Support", desc: "Ongoing updates and enhancements." },
            ].map((step) => (
              <motion.div 
                className="process-card" 
                key={step.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <span>{step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="process-image"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={processImage} alt="Process Excellence" />
        </motion.div>
      </motion.div>

 

 
      <br /><br />
      <Footer />
    </>
  );
};

export default Progressive;
