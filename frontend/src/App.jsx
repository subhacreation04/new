import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import WebsiteDev from './pages/Services/WEB/WebsiteDevelopment/WebsiteDev';
import Ecommerce from './pages/Services/WEB/E-commerce/Ecommerce';
import Progessive from './pages/Services/WEB/PWA/Progessive';
import Content from './pages/Services/WEB/CMS/content';
import Spa from './pages/Services/WEB/SPA/Spa';
import Visual from './pages/Services/GRAPHIC/Visual_Identity/Visual';
import Android from './pages/Services/APP/ANDROID/Android';
import Ios from './pages/Services/APP/IOS/Ios';
import Seo from './pages/Services/DIGITAL_MARKETING/SEO/Seo';
import Email from './pages/Services/DIGITAL_MARKETING/EMAIL_MARKETING/Email';
import ContentM from './pages/Services/DIGITAL_MARKETING/CONTENT_MARKETING/ContentM';
import Contact from './pages/Contact/Contact'
import SocialMedia from './pages/Services/DIGITAL_MARKETING/SOCIAL_MEDIA_MARKETING/SocialMedia';
import LeadG from './pages/Services/DIGITAL_MARKETING/LEAD_GENERATION/LeadG';
import Ad from './pages/Services/OTHER/AD_SHOOT/Ad';
import ContentWriting from './pages/Services/OTHER/CONTENT_WRITING/ContentWriting';
import Video from './pages/Services/OTHER/VIDEO_PRODUCTION/Video';
import Photoshoot from './pages/Services/OTHER/PHOTOSHOOT/PhotoShoot';
import Vision from './pages/AboutUs/Vision/Vision';
import Techno from './pages/AboutUs/Techno/Techno';
import Methodologie from './pages/AboutUs/Methodologies/Methodologie';
import Payments from './pages/AboutUs/Payments/Payments'
import Hiring from './pages/AboutUs/Hiring/Hiring';
import Blog from './pages/Blog/Blog';
import Payment from './pages/Services/Payment_Gateway/Payment';

import './App.css'

function App() {
 

  return (
    <Router>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path ="/services/websitedevelopment" element={<WebsiteDev/>}/>
      <Route path ="/services/web-development" element={<WebsiteDev/>}/>
      <Route path ="/services/ecommerce" element={<Ecommerce/>}/>
      <Route path ="services/pwa" element={<Progessive/>}/>
      <Route path ="services/cms" element={<Content/>}/>
      <Route path ="services/spa" element={<Spa/>}/>
      <Route path='/services/visual-identity' element={<Visual/>}/>        
      <Route path='/services/graphicdesign' element={<Visual/>}/>
      <Route path='/services/mobile-development' element={<Android/>}/>
      <Route path='/services/ios-development' element={<Ios/>}/>
      <Route path='/services/seo' element={<Seo/>}/>
      <Route path='/services/email-marketing' element={<Email/>}/>
      <Route path='/services/content-marketing' element={<ContentM/>}/>
      <Route path='/services/paymentgateway' element = {<Payment/>}/>
      <Route path='/contactus' element={<Contact/>}/>
      <Route path='/services/social-media' element={<SocialMedia/>}/>
      <Route path='/services/lead-generation' element={<LeadG/>}/>
      <Route path='/services/ad-films' element={<Ad/>}/>
      <Route path='/services/content-writing' element={<ContentWriting/>}/>
      <Route path='/services/video-production' element={<Video/>}/>
      <Route path='/services/photoshoot' element={<Photoshoot/>}/>
      <Route path='/vision-mission' element={<Vision/>}/>
      <Route path='technologies' element = {<Techno/>}/>
      <Route path='methodologies' element = {<Methodologie/>}/>
      <Route path='payments' element = {<Payments/>}/>
      <Route path='careers' element = {<Hiring/>}/>
      <Route path='blog' element = {<Blog/>}/>
      </Routes>
  </Router>
  )
}

export default App
