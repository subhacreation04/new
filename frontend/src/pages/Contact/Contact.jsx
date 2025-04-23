import React from "react";
import "./Contact.css";
import contact from "../../assets/contact.jpg";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="contact-dev-container">
        <div className="contact-content">
          <h1>Start Your Project – Get a Quote</h1>
          <h2>Boost customer loyalty and drive sales with result-driven contact marketing campaigns.</h2>
        </div>
        <div className="contact-image">
          <img src={contact} alt="Contact Development" />
        </div>
      </div>

      <div className="contact-info">
        <div className="contact-options">
          <h3>Get in Touch</h3>
          <p>Reach out to us via the following channels:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:info@subhacreation.com">info@subhacreation.co.in</a></li>
            <li><strong>Phone:</strong> <a href="tel:18002681979">18002681979</a></li>
          </ul>

          <div className="map-container">
            <li> <strong>Location: </strong>B-132, Oshiwara Industrial center, Off New Link Rd., Opp. Goregaon Bus Depot, Goregaon (W), Mumbai - 400 104.</li>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.946597388083!2d72.82972527583898!3d19.15381474952389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6413fe0df07%3A0x573573dc445b697f!2sOshiwara%20Industrial%20Center%2C%20Bhagat%20Singh%20II%2C%20Goregaon%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1743240185969!5m2!1sen!2sin" 
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        </div>
       
      </div>

      <Footer />
    </>
  );
};

export default Contact;