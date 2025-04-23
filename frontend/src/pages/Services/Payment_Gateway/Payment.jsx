import React from 'react'
import './Payment.css'
import Technology from '../../../pages/Technology/Technology';
import pay from '../../../assets/website.png';

import paypal from '../../../assets/Paypal-Logo.png';
import stripe from '../../../assets/stripe.jpg';
import razorpay from '../../../assets/amazon_pay.jpg';
import payu from '../../../assets/PayU.png';
import ccavenue from '../../../assets/2checkout.png';
import instamojo from '../../../assets/instamojo.jpg';
import authorize from '../../../assets/authorize_net.png';

import ClientSlider from "../../ClientSlider/ClientSlider";
import Footer from "../../Footer/Footer";
const Payment = () => {
  return (
    <>
    
          <div className="pay-dev-container">
        
        <div className="pay-content">
          <h1>Payment Gateway</h1>
          <h2>
          Secure & Seamless Payment Processing for Your Business
          </h2>
        </div>
        <div className="pay-image">
          <img src={pay} alt="pay Development" />
        </div>
      </div>

      <Technology />

      <div className="pay-description">
        <h1>Payment <span>Gateway</span></h1>
          <p>In today’s fast-paced digital economy, having a secure, efficient, and user-friendly payment gateway is crucial for businesses that accept online payments. A seamless transaction process enhances customer trust, reduces cart abandonment rates, and ensures smooth financial operations.

        At Subha Creation, we specialize in expert payment gateway integration services tailored to meet the unique needs of your business. Whether you operate an e-commerce store, subscription-based service, mobile app, or an online marketplace, we ensure that your customers enjoy a hassle-free, fast, and secure checkout experience.</p>
      </div>
<br /><br />
      <div className="pay-benefits">
        <h2>Why Choose Our Payment Gateway Integration?</h2>
        <ul>
          <li> <strong>Multi-Payment Support</strong> – Accept credit/debit cards, UPI, net banking, wallets, and international transactions.</li>
          <li> <strong>High Security & Compliance</strong> – PCI DSS compliance, SSL encryption, fraud detection, and real-time monitoring.</li>
          <li> <strong>Fast & Smooth Integration</strong> – API-based and plug-and-play solutions for websites, mobile apps, and software.</li>
          <li> <strong>Support for Multiple Gateways</strong> – Integration with PayPal, Stripe, Razorpay, PayU, CCAvenue, Instamojo, Authorize.Net, and more.</li>
          <li><strong>Custom Payment Solutions</strong> – Tailored to your business model, region, and customer preferences.</li>
          <li> <strong>24/7 Technical Support</strong> – Ensuring uninterrupted transactions and troubleshooting assistance.</li>
        </ul>
      </div>

      <div className="pay-gateways">
        <h2>Supported Payment Gateways</h2>
        <div className="gateway-list">
          <div className="gateway-item"><img src={paypal} alt="PayPal" /><p>PayPal</p></div>
          <div className="gateway-item"><img src={stripe} alt="Stripe" /><p>Stripe</p></div>
          <div className="gateway-item"><img src={razorpay} alt="Razorpay" /><p>Razorpay</p></div>
          <div className="gateway-item"><img src={payu} alt="PayU" /><p>PayU</p></div>
          <div className="gateway-item"><img src={ccavenue} alt="CCAvenue" /><p>CCAvenue</p></div>
          <div className="gateway-item"><img src={instamojo} alt="Instamojo" /><p>Instamojo</p></div>
          <div className="gateway-item"><img src={authorize} alt="Authorize.Net" /><p>Authorize.Net</p></div>
        </div>
      </div>

        
      <br /><br />
      <ClientSlider />
      <br /><br /><br />
      <Footer />

    </>
  )
}

export default Payment