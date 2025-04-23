import React from 'react';
import './SocialMedia.css';
import socialMedia from '../../../../assets/social-media-marketing.jpg';
import Technology from '../../../Technology/Technology';
import smm from '../../../../assets/smm.gif';
import ClientSlider from "../../../ClientSlider/ClientSlider";
import Footer from "../../../Footer/Footer";
import { useNavigate } from 'react-router-dom';
const SocialMedia = () => {
  const navigate = useNavigate(); // Hook to handle navigation
  return (
      
    <>    
    
      {/* Social Media Marketing Section */}
      <div className="socialMedia-dev-container">
        <div className="socialMedia-content">
          <h1>Social Media Marketing</h1>
          <h2>Boost customer loyalty and drive sales with result-driven social media marketing campaigns.</h2>
        </div>
        <div className="socialMedia-image">
          <img src={socialMedia} alt="Social Media Marketing" />
        </div>
      </div>

      {/* Technology Section */}
      <Technology />

      {/* CTA Section 1 */}
      <div className="cta-section">
        <h2>Maximize Your Brand’s Reach on Social Media</h2>
        <p>Grow your audience, boost engagement, and increase conversions with expert social media strategies.</p>
        <button className="cta-button" onClick={() => navigate('/contact')}>Get a Free Social Media Audit</button>
      </div>


      {/* Why Social Media Marketing? */}
      <div className="socialMedia-benefits">
        <h2>Why Invest in Social Media Marketing?</h2>
        <p>With billions of users actively engaging on social media platforms, leveraging the right strategy can significantly boost your brand visibility, engagement, and conversions.</p>
        <div className="social-list-content">
        <ul>
          <li>✅ Increase brand awareness and reach</li>
          <li>✅ Engage with your audience in real-time</li>
          <li>✅ Improve customer loyalty and trust</li>
          <li>✅ Generate high-quality leads and boost sales</li>
          <li>✅ Leverage data-driven insights for better decisions</li>
        </ul>
        <img src={smm} alt="" />
        </div>

      </div>
      {/* Call to Action */}
      <div className="socialMedia-cta">
        <h2>Ready to Elevate Your Brand?</h2>
        <p>Let’s build a powerful social media strategy that drives engagement and sales. Get in touch today!</p>
        <button className="cta-button" onClick={() => navigate('/contact')}>Start Your Campaign</button>
      </div>


      {/* Social Media Marketing Strategies */}
      <div className="socialMedia-strategies">
        <h2>Our Social Media Marketing Strategies</h2>
        <div className="strategies-grid">
          <div className="strategy-card">
            <h3>Content Creation</h3>
            <p>We craft high-quality, engaging, and shareable content tailored to your audience.</p>
          </div>
          <div className="strategy-card">
            <h3>Paid Advertising</h3>
            <p>Maximize reach and conversions with highly targeted ad campaigns on Facebook, Instagram, LinkedIn, and more.</p>
          </div>
          <div className="strategy-card">
            <h3>Influencer Marketing</h3>
            <p>Leverage influencer partnerships to boost brand credibility and expand your audience.</p>
          </div>
          <div className="strategy-card">
            <h3>Community Engagement</h3>
            <p>We interact with your audience, respond to queries, and build a strong brand community.</p>
          </div>
        </div>
      </div>
    
      <br /><br /><br /><br /><br />
 
      <Footer />

    </>
  );
}

export default SocialMedia;
