import React from 'react';
import { motion } from 'framer-motion';
import './Payments.css';
import about from '../../../assets/about.jpg';
import ClientSlider from "../../ClientSlider/ClientSlider";
import Footer from "../../Footer/Footer";
import policy from "../../../assets/policy.jpg";

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

const Payments = () => {
  return (
    <>
      <motion.div className="payment-dev-container" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeIn}>
        <div className="payment-content">
          <h1>How to Make Payments</h1>
          <h2>Subha Creation offers multiple secure payment options to ensure a seamless transaction experience.</h2>
        </div>
        <div className="payment-image">
          <motion.img src={about} alt="About Us Development" variants={fadeIn} whileInView="visible" viewport={{ once: false }} />
        </div>
      </motion.div>

      <motion.div className="payment-methods" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={staggerContainer}>
        <h2>Payment Methods</h2>
        <ul>
          <motion.li variants={fadeIn}><strong>Credit/Debit Cards</strong> – We accept Visa, MasterCard, American Express, and more.</motion.li>
          <motion.li variants={fadeIn}><strong>PayPal</strong> – Secure online transactions using your PayPal account.</motion.li>
          <motion.li variants={fadeIn}><strong>Bank Transfers</strong> – Direct payment through wire or bank transfers.</motion.li>
          <motion.li variants={fadeIn}><strong>UPI & Digital Wallets</strong> – Google Pay, PhonePe, and other leading digital wallets.</motion.li>
          <motion.li variants={fadeIn}><strong>Cryptocurrency Payments</strong> – Bitcoin, Ethereum, and other supported cryptocurrencies.</motion.li>
        </ul>
      </motion.div>

      <motion.div className="payment-gateways" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={staggerContainer}>
        <h2>Popular Payment Gateways</h2>
        <ul>
          <motion.li variants={fadeIn}><strong>PayPal</strong> – Secure and widely used online payment system.</motion.li>
          <motion.li variants={fadeIn}><strong>Stripe</strong> – API-driven solution for seamless payments.</motion.li>
          <motion.li variants={fadeIn}><strong>Authorize.Net</strong> – Reliable electronic and credit card processing.</motion.li>
          <motion.li variants={fadeIn}><strong>Square</strong> – Trusted payment processing for businesses.</motion.li>
          <motion.li variants={fadeIn}><strong>Amazon Pay</strong> – Uses existing Amazon credentials for payments.</motion.li>
        </ul>
      </motion.div>
     
      <motion.div className="payment-policies" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={staggerContainer}>
      <h2>Payment Policies</h2>
        <ul>
          <motion.li variants={fadeIn}><strong>Security:</strong> We use encrypted transactions and PCI DSS-compliant gateways.</motion.li>
          <motion.li variants={fadeIn}><strong>Refund Policy:</strong> Eligible refunds are processed within 7-10 business days.</motion.li>
          <motion.li variants={fadeIn}><strong>Billing & Invoices:</strong> Automatic invoices are generated for every transaction.</motion.li>
          <motion.li variants={fadeIn}><strong>Transaction Fees:</strong> Standard processing fees may apply depending on the payment method.</motion.li>
          <motion.li variants={fadeIn}><strong>International Payments:</strong> We support multiple currencies for global transactions.</motion.li>
        </ul>
        <motion.img src={policy} alt="Policies" className='policy' variants={fadeIn} whileInView="visible" viewport={{ once: false }} />
      </motion.div>

      <br /><br />
 
 
      <Footer />
    </>
  );
};

export default Payments;
