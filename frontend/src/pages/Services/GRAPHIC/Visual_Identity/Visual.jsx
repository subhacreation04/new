import React from 'react';
import { motion } from 'framer-motion';
import './Visual.css';
import visual from '../../../../assets/website.png';
import Technology from '../../../Technology/Technology';
import Industries from '../../../Industries/Industries';
import logoDesign from '../../../../assets/Graphic/logoDesign.jfif';
import brandIdentity from '../../../../assets/Graphic/brandIdentity.jfif';
import UIUX from '../../../../assets/Graphic/UIUX.jpg';
import smg from '../../../../assets/Graphic/smg.png';
import marketing from '../../../../assets/Graphic/marketing.png';
import motionGraphics from '../../../../assets/Graphic/motionGraphics.jpg';
import packagingDesign from '../../../../assets/Graphic/packagingDesign.jfif';
import infograpgic from '../../../../assets/Graphic/infograpgic.png';
// Import tool images
import photoshop from '../../../../assets/Graphic/Tools/adobePhotoshop.jpg';
import illustrator from '../../../../assets/Graphic/Tools/abodeIllustration.png';
import xd from '../../../../assets/Graphic/Tools/adobeXd.jfif';
import figma from '../../../../assets/Graphic/Tools/figma.png';
import canva from '../../../../assets/Graphic/Tools/canva.jpg';
import sketch from '../../../../assets/Graphic/Tools/sketch.png';
import corelDraw from '../../../../assets/Graphic/Tools/corelDraw.jpg';
import framer from '../../../../assets/Graphic/Tools/framer.png';
import proto from '../../../../assets/Graphic/Tools/Proto.png';
// Additional Image for Left Side
import toolsIllustration from '../../../../assets/Graphic/The-Essential-Web-Development-Tools-Every-Developer-Should-Know.png'; 
import ClientSlider from "../../../ClientSlider/ClientSlider"; 
import Footer from "../../../Footer/Footer";
import rightImage from '../../../../assets/Graphic/whychooseus.jpg'; // Import the image
import { useNavigate } from 'react-router-dom';
const featuresData = [
  {
    title: "Logo Design",
    description: "We create unique, memorable, and scalable logos that define your business identity.",
    image: logoDesign, 
  },
  {
    title: "Branding & Identity",
    description: "Cohesive brand elements like business cards, letterheads, and brand kits.",
    image: brandIdentity,
  },
  {
    title: "UI/UX Design",
    description: "User-friendly and aesthetically pleasing interfaces for websites and apps.",
    image: UIUX,
  },
  {
    title: "Social Media Graphics",
    description: "Custom-designed posts, banners, and ads for social media platforms.",
    image: smg,
  },
  {
    title: "Marketing Materials",
    description: "Eye-catching brochures, flyers, posters, and banners for marketing.",
    image: marketing,
  },
  {
    title: "Motion Graphics",
    description: "Animated logos and explainer videos for dynamic storytelling.",
    image: motionGraphics,
  },
  {
    title: "Packaging Design",
    description: "Our creative packaging designs help your products stand out on the shelves and online marketplaces.",
    image: packagingDesign,
  },
  {
    title: "Custom Illustrations & Infographics",
    description: "Simplify complex ideas with engaging infographics and creative illustrations .",
    image: infograpgic,
  }
];

const toolsData = [
  { name: "Adobe Photoshop", image: photoshop },
  { name: "Adobe Illustrator", image: illustrator },
  { name: "Adobe XD", image: xd },
  { name: "Figma", image: figma },
  { name: "Canva", image: canva },
  { name: "Sketch", image: sketch },
  { name: "CorelDRAW", image: corelDraw },
  { name: "Framer", image: framer },
  { name: "Proto.io", image: proto }
];

const Visual = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <>
 
      <div className="visual-dev-container">
        <div className="visual-content">
          <h1>Graphic Designing</h1>
          <h2>
          Bringing your brand to life with stunning and impactful graphic design.
          </h2>
        </div>
        <div className="visual-image">
          <img src={visual} alt="Visual Development" />
        </div>
      </div>

      <Technology />
      {/* CTA Section 1 */}
      <div className="cta-section">
        <h2>Transform Your Brand with Stunning Designs</h2>
        <p>Stand out with eye-catching graphics, custom illustrations, and creative branding solutions.</p>
        <button className="cta-button" onClick={() => navigate('/contactus')}>Get a Free Consultation</button>
      </div>
            {/* Features Section */}
            <motion.div className="visual-features-container" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8 }}>
        <h1 className="visual-heading">Our Graphic Design Services</h1>
        <div className="visual-features-grid">
          {featuresData.map((feature, index) => (
            <motion.div className="visual-feature-card" key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5 }}>
              <img src={feature.image} alt={feature.title} className="visual-feature-image" />
              <div className="visual-feature-content">
                <h3 className="visual-feature-title">{feature.title}</h3>
                <p className="visual-feature-description">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>


      {/* Why Choose Us Section */}
      <div className="why-choose-us-section">
        <div className="why-choose-us-content">
          <h1 className="why-choose-us-title">Why Choose Us?</h1>
          <ul className="why-choose-us-list">
            <li> Experienced and creative design team</li>
            <li> Tailor-made designs to suit your brand identity</li>
            <li> High-quality visuals that engage and convert</li>
            <li> Fast turnaround time and multiple revisions</li>
            <li> Affordable pricing with flexible packages</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="why-choose-us-image">
          <img src={rightImage} alt="Why Choose Us" />
        </div>
      </div>

      {/* Tools Section with Left Image & Right Logo */}
      <motion.div className="visual-tools-container" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8 }}>
        <br /> <br />
        <h5 className="visual-heading">Design Tools We Use</h5>
        <div className="visual-tools-layout">
          <div className="visual-tools-left">
            <img src={toolsIllustration} alt="Design Tools Illustration" className="visual-tools-image" />
          </div>
          <div className="visual-tools-right">
            <div className="visual-tools-grid">
              {toolsData.map((tool, index) => (
                <motion.div className="visual-tool-card" key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5 }}>
                  <img src={tool.image} alt={tool.name} className="visual-tool-image" />
                  <h3 className="visual-tool-name">{tool.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section 2 */}
      <div className="cta-section">
        <h2>Elevate Your Visual Identity with Professional Designs</h2>
        <p>From logos to social media creatives, we craft visually appealing designs that leave a lasting impact.</p>
        <button className="cta-button" onClick={() => navigate('/contactus')}>Let’s Create Magic</button>
      </div>

 
      <br />
      <br />

      <Footer />
    </>
  );
};

export default Visual;
