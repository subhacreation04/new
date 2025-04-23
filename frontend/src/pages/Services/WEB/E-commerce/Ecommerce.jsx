import React, { useState } from 'react';
import './Ecommerce.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faShoppingCart, faChartBar, faHandshake, faHeadset, faGlobe, faCreditCard, faBoxOpen,  faSearch, faClipboardCheck  } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import ecommerce from '../../../../assets/ecommerce-website.png';
import shoppingImage from '../../../../assets/web-development.gif';
import Technology from '../../../Technology/Technology';
import Industries from '../../../Industries/Industries';
import Footer from '../../../Footer/Footer';
import ClientSlider from '../../../ClientSlider/ClientSlider';
import question from '../../../../assets/question1.gif';
import { useNavigate } from 'react-router-dom';

const features = [
  { icon: faHandshake, title: 'Tailored for Your Business', description: 'Custom solutions for your brand and customer needs.' },
  { icon: faBolt, title: 'Lightning-Fast Performance', description: 'Quick loading times and seamless experience.' },
  { icon: faChartBar, title: 'AI-Powered Personalization', description: 'Smart product recommendations and pricing strategies.' },
  { icon: faBoxOpen, title: 'Seamless Inventory Management', description: 'Automate stock tracking and avoid overselling with real-time updates.' },
  { icon: faHeadset, title: '24/7 Customer Support Integration', description: 'Enhance user satisfaction with chatbots and live customer assistance.' },
  { icon: faCreditCard, title: 'Flexible Payment Options', description: 'Support multiple payment methods, including BNPL, crypto, and digital wallets.' }
];

const shoppingSteps = [
  { icon: faSearch, title: 'Step 1: Browsing Products', description: 'Explore products with AI recommendations and filters.' },
  { icon: faShoppingCart, title: 'Step 2: Adding to Cart', description: 'Quickly add products with real-time stock updates.' },
  { icon: faClipboardCheck, title: 'Step 3: Checking Out', description: 'Fast checkout with multiple payment options.' },
];

const Ecommerce = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div 
        className='ecommerce-dev-container'
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <div className='ecommerce-content'>
          <h1>Ecommerce Website</h1>
          <h2>Seamless online shopping at your fingertips!</h2>
        </div>
        <div className='ecommerce-image'>
          <img src={ecommerce} alt='Ecommerce Development' />
        </div>
      </motion.div>

      <Technology />

      <motion.div className='cta-section' initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        <h2>Launch Your E-Commerce Store Today!</h2>
        <p>We create powerful online stores tailored to your business needs.</p>
        <motion.button 
          className='cta-button' 
          onClick={() => navigate('/contact')}
          whileHover={{ scale: 1.1 }}
        >Get a Free Consultation</motion.button>
      </motion.div>

      <motion.div 
        className='ecommerce-features-section'
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <h2>Our E-Commerce Features</h2>
        <div className='ecommerce-features-grid'>
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className='ecommerce-feature-card'
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FontAwesomeIcon icon={feature.icon} className='feature-icon' />
              <div className='ecommerce-feature-cardDetails'>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
    

      <motion.div className='shopping-experience' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <div className='shopping-left'>
          <h2>A Seamless Shopping Experience, Step by Step</h2>
          <div className='steps-container'>
            {shoppingSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className='step-card'
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className='step-circle'>
                  <FontAwesomeIcon icon={step.icon} className='step-icon' />
                </div>
                <div className='step-content'>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className='shopping-right'>
          <img src={shoppingImage} alt='Shopping Experience' />
        </div>
      </motion.div>

 
      <br />
            <Footer />
    </>
  );
};

export default Ecommerce;