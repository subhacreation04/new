import React from 'react';
import { motion } from 'framer-motion';
import './Techno.css';
import about from '../../../assets/about.jpg';
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

const Techno = () => {
  return (
    <>
      <motion.div className="techno-dev-container" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeIn}>
        <div className="techno-content">
          <h1>Technologies We Use</h1>
          <h2>
            Subha Creation is a leading firm based in India with the primary objective of providing the best services to enhance the overall growth of our client’s business.
          </h2>
        </div>
        <div className="techno-image">
          <motion.img src={about} alt="About Us Development" variants={fadeIn} whileInView="visible" viewport={{ once: false }} />
        </div>
      </motion.div>

      <motion.div className="technology-section" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={staggerContainer}>
        <h2>Web Development Technologies</h2>
        <ul>
          <motion.li variants={fadeIn}>✅ <strong>Responsive Web Design</strong> – Crafting fast-loading, mobile-friendly websites that adapt perfectly to all screen sizes.</motion.li>
          <motion.li variants={fadeIn}>✅ <strong>HTML5 & CSS3</strong> – Building visually captivating, interactive, and responsive web experiences with modern styling techniques.</motion.li>
          <motion.li variants={fadeIn}>✅ <strong>JavaScript & jQuery</strong> – Creating dynamic, engaging, and high-performance web applications for an intuitive user experience.</motion.li>
          <motion.li variants={fadeIn}>✅ <strong>PHP & Laravel</strong> – Developing robust, scalable, and secure backend solutions tailored to business needs.</motion.li>
          <motion.li variants={fadeIn}>✅ <strong>Angular & React</strong> – Empowering modern web applications with efficient and interactive user interfaces.</motion.li>
        </ul>

        <h2>Mobile App Development</h2>
        <ul>
          <motion.li variants={fadeIn}>📱 <strong>Android Application Development</strong> – Delivering feature-rich, high-quality Android apps optimized for performance and user engagement.</motion.li>
          <motion.li variants={fadeIn}>📱 <strong>iOS App Development</strong> – Creating sleek, powerful, and seamless applications for Apple devices.</motion.li>
          <motion.li variants={fadeIn}>📱 <strong>React Native & Flutter</strong> – Building cross-platform mobile apps with a single codebase for faster development and cost efficiency.</motion.li>
        </ul>

        <h2>Advanced Web Technologies</h2>
        <ul>
          <motion.li variants={fadeIn}>🚀 <strong>AJAX (Asynchronous JavaScript and XML)</strong> – Enhancing user experience with real-time updates and seamless interactions.</motion.li>
          <motion.li variants={fadeIn}>🚀 <strong>Node.js & Express.js</strong> – Powering scalable, high-speed applications with real-time capabilities.</motion.li>
          <motion.li variants={fadeIn}>🚀 <strong>MongoDB & MySQL</strong> – Providing reliable, secure, and efficient database solutions for web and mobile applications.</motion.li>
        </ul>

        <h2>Other Technologies & Tools</h2>
        <ul>
          <motion.li variants={fadeIn}>🔹 <strong>WordPress & CMS Development</strong> – Customizing content management solutions for easy website handling.</motion.li>
          <motion.li variants={fadeIn}>🔹 <strong>E-commerce Solutions (Shopify, WooCommerce, Magento)</strong> – Creating secure and user-friendly online stores.</motion.li>
          <motion.li variants={fadeIn}>🔹 <strong>Cloud & DevOps</strong> – Implementing AWS, Google Cloud, and CI/CD pipelines for scalable and automated deployments.</motion.li>
        </ul>

        <p>We are committed to staying ahead of the curve, constantly evolving with the latest trends and best practices to deliver cutting-edge digital solutions.</p>
      </motion.div>
 
      <br /><br />
      <Footer />
    </>
  );
};

export default Techno;
