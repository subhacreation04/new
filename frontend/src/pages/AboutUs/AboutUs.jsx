import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';
import aboutUs from '../../assets/about.jpg';
import brief from '../../assets/About-brief.jpg'
import about from '../../assets/about1.jpg';
import Technology from '../Technology/Technology';
import { faCode, faPalette, faShoppingCart, faMobileAlt, faBullhorn, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ClientSlider from "../ClientSlider/ClientSlider";
import Footer from "../Footer/Footer";

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

const AboutUs = () => {
  const capabilities = [
    { icon: faCode, title: "Web Development", description: "Tailored web solutions designed to align with your business objectives and drive efficiency." },
    { icon: faPalette, title: "Web & UI Design", description: "Engaging, intuitive, and aesthetically appealing UI/UX designs for an outstanding user experience." },
    { icon: faShoppingCart, title: "E-commerce Development", description: "Scalable and high-performing e-commerce solutions to help you expand your online business." },
    { icon: faMobileAlt, title: "Mobile App Development", description: "Custom mobile applications that deliver seamless performance and user satisfaction." },
    { icon: faBullhorn, title: "Digital Marketing", description: "Data-driven online marketing strategies to boost brand visibility and customer engagement." },
    { icon: faCreditCard, title: "Payment Gateway Solutions", description: "Seamless integration of payment solutions to enable secure and fast transactions." }
  ];
  
  return (
    <>
      <motion.div 
        className="aboutUs-dev-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeIn}
      >
        <div className="aboutUs-content">
          <h1>About Us</h1>
          <h2>Subha Creation is a leading firm based in India with the primary objective to provide best services to improve the overall growth of our client’s business.</h2>
        </div>
        <motion.div className="aboutUs-image" variants={fadeIn} whileInView="visible" viewport={{ once: false }}>
          <img src={about} alt="About Us Development" />
        </motion.div>
      </motion.div>
 
      <br /> 
      <motion.div className="aboutUs-tagline" variants={fadeIn} whileInView="visible" viewport={{ once: false }}>
         
        <h1>Inspired by Purpose <span> Driven by Passion</span></h1>
        <h3>LET’S BUILD SOMETHING AMAZING TOGETHER!</h3>
        <h4>We’re here to create meaningful relationships with our clients.</h4>
        <br />

      </motion.div>


      <div className="brief-intro">
        <div className="intro-img">
            <img src={brief} alt="" srcset="" />
          </div>
          <div className="intro-info">
          <h1>Where Creativity Meets Technology</h1>     
          <h2>Subha Creation is a premier digital photography and IT solutions powerhouse based in India, blending artistic excellence with cutting-edge technology.
            For over  years, we’ve empowered businesses across industries—corporate, advertising, e-commerce, retail, and more—with high-end photography, videography,
            and bespoke digital solutions that drive growth, engagement, and brand transformation.</h2> 

            <h1>Our Story</h1>
            <h2>Founded in 2010, Subha Creation began as a niche photography studio and evolved into a full-service digital agency trusted by many clients. Our journey reflects our commitment to innovation, quality, and client success—from capturing stunning visuals to building scalable web/mobile platforms that redefine digital experiences.
            </h2>
        </div>
        


      </div>



      <motion.div 
        className="capabilities-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={staggerContainer}
      >
        <h2>Our Capabilities</h2>
        <div className="capabilities-container">
          {capabilities.map((cap, index) => (
            <motion.div key={index} className="capability-card" variants={fadeIn} whileHover={{ scale: 1.1 }}>
              <FontAwesomeIcon icon={cap.icon} className="capability-icon" />
              <h3 className="capability-title">{cap.title}</h3>
              <p className="capability-description">{cap.description}</p>
          
            </motion.div>
          ))}
        </div>
         
      </motion.div>
      

      <div class="container">
    <h1>Our Team</h1>
    <p>At <strong>Subha Creation</strong>, we’re more than just a team—we’re a collective of visual storytellers and digital creators driven by passion and innovation. Our strength lies in the perfect fusion of <strong>technical expertise and artistic vision</strong>, ensuring every project we undertake is both <strong>strategically sound and visually compelling</strong>.</p>

    <h2>Our Leadership: Bridging Technology & Creativity</h2>
<div className="leader-wrap">
    <div class="leader">
        <h3>Mr. Prashant Giri</h3>
        <p><strong>Chairman & Managing Director</strong></p>
        <ul>
            <li>20+ years of expertise in IT automation and digital transformation</li>
            <li>Strategic architect behind our tech-powered photography solutions</li>
            <li>Specialist in scalable enterprise systems</li>
        </ul>
        <p class="quote">“We don’t just capture images—we engineer visual assets that perform.”</p>
    </div>

    <div class="leader">
        <h3>Mrs. Vandana Giri</h3>
        <p><strong>Director & Creative Vision Head</strong></p>
        <ul>
            <li>Curator of the studio’s signature aesthetic style</li>
            <li>Leads brand storytelling through photography</li>
            <li>Advocate for women in professional photography</li>
        </ul>
        <p class="quote">“Every frame should reveal the essence of what makes a brand unique.”</p>
    </div>
    </div>
</div>
      <motion.div 
        className="about-choose"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeIn}
      >
        <h2>Why Choose Subha Creation?</h2>
        <ul>
          <motion.li variants={fadeIn}><strong>Expertise & Innovation:</strong> We bring together a team of highly skilled professionals proficient in the latest technologies.</motion.li>
          <motion.li variants={fadeIn}><strong>Industry Experience:</strong> With 1,450+ successful projects delivered over 14+ years.</motion.li>
          <motion.li variants={fadeIn}><strong>Commitment to Deadlines:</strong> Timely project delivery is our priority.</motion.li>
          <motion.li variants={fadeIn}><strong>Cost-Effective Solutions:</strong> We believe in delivering value-driven solutions at competitive prices.</motion.li>
        </ul>
      </motion.div>
          
      <br /><br />
      <Footer/>
    </>
  );
};

export default AboutUs;
