import React ,{useState} from 'react';
import './Seo.css';
import seo from '../../../../assets/seo-banner.jpg';
import seoWorks from '../../../../assets/seo-works.png';
import whychooseus from '../../../../assets/why.gif'
import Technology from '../../../Technology/Technology';
import process from '../../../../assets/seo-search-engine-optimization-process.gif';
import Industries from '../../../Industries/Industries'
import ClientSlider from "../../../ClientSlider/ClientSlider";
import Footer from "../../../Footer/Footer";
import { useNavigate } from 'react-router-dom';
const Seo = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate(); // Hook to handle navigation

  const faqs = [
    {
      question: "How long does SEO take to show results?",
      answer: "SEO results typically take 3-6 months, depending on competition & strategy."
    },
    {
      question: "What is the cost of SEO services?",
      answer: "We offer customized SEO packages based on your business needs. Contact us for a free quote."
    },
    {
      question: "Do you provide monthly SEO reports?",
      answer: "Yes, we provide detailed reports on rankings, traffic & overall performance."
    },
    {
      question: "Can you help with penalty recovery?",
      answer: "Absolutely! We can help recover rankings if your site has been penalized by Google."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
 
      <div className="seo-dev-container">
        <div className="seo-content">
          <h1>Search Engine Optimization</h1>
          <h2>
            Maximize Your Online Reach & Drive More Sales!<br />
            Data-Driven Digital Marketing Solutions for More Traffic, Leads, & Conversions.
          </h2>
        </div>
        <div className="seo-image">
          <img src={seo} alt="SEO Development" />
        </div>
      </div>

      <Technology />

      {/* CTA Section 1 */}
      <div className="cta-section">
        <h2>Ready to Boost Your Rankings?</h2>
        <p>Get a customized SEO strategy for your business today.</p>
        <button className="cta-button"  onClick={() => navigate('/contact')}>Get Started</button>
      </div>
      
      <div className="how-seoworks">
        <br /><br />
        <h1>How SEO works</h1>
        <p>
          SEO works by optimizing your site for the search engine that you want to rank for, whether it’s Google, Bing, Amazon, or YouTube. Specifically, your job is to make sure that a search engine sees your site as the overall best result for a person’s search.
        </p>

        <div className="seo-box">
          <div className="left-image-seo">
            <img src={seoWorks} alt="SEO Development" />
          </div>
          <div className="right-list-seo">
            <ul>
              <li><span>Keyword research:</span> Understand what keywords people use to search for a topic</li>
              <li><span>Content creation:</span> Create content based on keywords to help users find the page</li>
              <li><span>Backlinks:</span> Get links from other pages to your page</li>
              <li><span>Technical SEO:</span> Improve site speed, mobile-friendliness, and crawlability</li>
              <li><span>User experience:</span> Make sure the page is easy to use and provides a good experience</li>
            </ul>
          </div>
        </div>
      </div>
 
      <div className="seo-services">
        <h1>Why Choose Our SEO Services?</h1>
        <br />
        <div className="seo-services-container">
        <div className="seo-features">
          <div className="seo-feature">
            <div className="seo-icon">1</div>
             <h3>Proven SEO Strategies  :-</h3>
            <p> Valid SSL certificate from a certificate authority</p>
          </div>
          <div className="seo-feature">
            <div className="seo-icon">2</div>
            <h3>White Hat SEO Practices  :- </h3>

            <p>Strong password policy</p>
          </div>
          <div className="seo-feature">
            <div className="seo-icon">3</div>
            <h3>Increased Website Traffic  :-</h3>
            <p>Reliable security tool to run frequent scans</p>
          </div>
          <div className="seo-feature">
            <div className="seo-icon">4</div>
            <h3>Better Conversion Rates  :-</h3>
            <p>Turn visitors into customers</p>
          </div>
          <div className="seo-feature">
            <div className="seo-icon">5</div>
            <h3>Local & Global SEO Expertise  :-</h3>
            <p>We help businesses of all sizes</p>
          </div>
          <div className="seo-feature">
            <div className="seo-icon">6</div>
            <h3>Transparent Reporting  :-</h3>
            <p>Regular performance tracking & analytics</p>
          </div>
        </div>

        <div className="seo-services-image">
            <img src={whychooseus} alt="" />
        </div>
        </div>
      </div>

      
      <div className="our-seo-services">
        <h1>Our SEO Services</h1>
        <div className="seo-services-grid">
          {[{
            icon: "🔍", title: "Keyword Research & Strategy", desc: "Find & target high-ranking keywords for your business."
          }, {
            icon: "📄", title: "On-Page SEO Optimization", desc: "Optimize meta tags, headers, content, & images for search engines."
          }, {
            icon: "🔗", title: "Off-Page SEO & Link Building", desc: "Increase authority with quality backlinks & outreach."
          }, {
            icon: "📍", title: "Local SEO & Google My Business Optimization", desc: "Rank higher in local searches & attract nearby customers."
          }, {
            icon: "🛍️", title: "E-commerce SEO", desc: "Optimize online stores for better visibility & more sales."
          }, {
            icon: "📝", title: "SEO Content Writing", desc: "High-quality blog posts, articles, & website content for better rankings."
          }, {
            icon: "🚀", title: "Technical SEO Audit & Fixes", desc: "Improve site speed, mobile-friendliness, & indexing."
          }, {
            icon: "📊", title: "SEO Analytics & Reporting", desc: "Track keyword rankings, traffic & performance with detailed reports."
          }].map((service, index) => (
            <div className="seo-service-card" key={index}>
              <div className="seo-service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
 {/* CTA Section 2 */}
 <div className="cta-section">
        <h2>Talk to Our SEO Experts Today!</h2>
        <p>Let’s discuss how we can take your business to the next level.</p>
        <button className="cta-button"  onClick={() => navigate('/contact')}>Contact Us</button>
      </div>

      <div className="seo-process">
        <h1>Our SEO Process</h1>
        <div className="seo-process-container">
          <div className="seo-process-image">
            <img src={process} alt="SEO Process" />
          </div>
          <div className="seo-process-steps">
            {["Website Audit & Analysis", "Keyword Research & Strategy", "On-Page Optimization", "Technical SEO Enhancements", "Link Building & Off-Page SEO", "Performance Tracking & Optimization"].map((step, index) => (
              <div className="seo-process-step" key={index}>
                <div className="seo-process-icon"> 📌 {index + 1}️⃣</div>
                <h3>{step}</h3>
                <p>{[
                  "Identify strengths, weaknesses & SEO opportunities.",
                  "Find the best keywords for your target audience.",
                  "Enhance content, meta tags, images, and internal linking.",
                  "Fix site speed, mobile optimization, & indexing issues.",
                  "Gain high-quality backlinks to increase domain authority.",
                  "Monitor & improve rankings, traffic & conversions continuously."
                ][index]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br></br>  
     
      <br></br> <br></br>
       
 
       
      <br></br>
      <Footer />
    </>
  );
};

export default Seo;
