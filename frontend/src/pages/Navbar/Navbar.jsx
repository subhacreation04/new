import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown ,Menu} from "lucide-react";

import "./Navbar.css";
import logo from "../../assets/logo.PNG";
import one from "../../assets/wd.jfif";
import three from "../../assets/ad.jfif";
import four from "../../assets/dm.jfif";
import gd from "../../assets/graphic_design.jpg";
import pg from "../../assets/pg.png";


const Navbar = () => {


  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isAboutVisible, setAboutVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigation


  const aboutInfo = [
    { name: "About Us", path: "/about-us", },
    { name: "Vision & Mission", path: "/vision-mission", },
    { name: "Technologies", path: "/technologies",},
    { name: "Methodology", path: "/methodologies",  },
    { name: "How to Make Payments", path: "/payments",},
    { name: "We Are Hiring", path: "/careers", },
   
  ];
  const servicesInfo = [
    {
      name: "Web Development",
      description: "Transforming your vision into seamless online experiences.",
      image: one,
      path: "/services/websitedevelopment",
      links: [
        { name: "Dynamic Website Development", path: "/services/websitedevelopment" },
        { name: "E-Commerce Website", path: "/services/ecommerce" },
        { name: "PWA", path: "/services/pwa" },
        { name: "CMS-Based Design", path: "/services/cms" },
        { name: "SPA", path: "/services/spa" },
      ],
    },
    {
      name: "Graphic Designing",
      description: "Creating intuitive and user-friendly designs.",
      image: gd,
      path: "/services/graphicdesign",
      links: [
        { name: "Click here", path: "/services/visual-identity" },

      ],
    },
    {
      name: "App Development",
      description: "Building powerful mobile applications.",
      image: three,
      path: "/services/mobile-development",
      links: [
        { name: "Android Development", path: "/services/mobile-development" },
        { name: "IOS App Development", path: "/services/ios-development" },
      ],
    },
    {
      name: "Digital Marketing",
      description: "Driving growth with innovative strategies.",
      image: four,
      path: "/services/seo",
      links: [
        { name: "SEO", path: "/services/seo" },
        { name: "Email Marketing", path: "/services/email-marketing" },
        { name: "Content Marketing", path: "/services/content-marketing" },
        { name: "Social Media Marketing", path: "/services/social-media" },
        { name: "Lead Generation & Analytics", path: "/services/lead-generation" },
      ],
    },
    {
      name: "Payment Gateway",
      description: "Pay,Click,Done ",
      image: pg,
      path: "/services/paymentgateway",
      links: [
        { name: "Click here", path: "/services/paymentgateway" },

      ],
    },
    {
      name: "Other Services",
      description: "Explore additional offerings tailored to your needs.",
      image: three,
      path: "/services/ad-films",
      links: [
        { name: "Ad Films", path: "/services/ad-films" },
        { name: "PhotoShoot", path: "/services/photoshoot" },
        { name: "Video Production", path: "/services/video-production" },
        { name: "Content Writing", path: "/services/content-writing" },
      ],
    },
  ];

  // Close dropdown when route changes
  useEffect(() => {
    setDropdownVisible(false);
  }, [location]);

  return (
    <div className="navbar-main">
      <div className="nav-contact">
        <div className="con-text">
          <h4>Email: info@subhacreation.co.in </h4>
          <h4>Contact: 18002681979</h4>
        </div>
        <div className="nav-logo-links">
          <div className="nav-logo">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>




          <div className="nav-links">
            <nav>
              <ul>
                {/* about Dropdown */}
                <li
                    className="dropdown"
                    onMouseEnter={() => setAboutVisible(true)}
                  >
                    <Link to="#" className="dropbtn" onClick={(e) => e.preventDefault()}>
                      Who Are We
                    </Link>

                  {isAboutVisible && (
                    <div
                      className="about-dropdown-content"
                      onMouseEnter={() => setAboutVisible(true)}
                      onMouseLeave={() => setAboutVisible(false)}
                    >
                      {/* About Column*/}
                      <div className="about-left">
                        {aboutInfo.map((service, index) => (
                          <p
                            key={index}
                            onMouseEnter={() => setActiveService(index)}
                            onClick={() => {
                              navigate(service.path);
                              window.scrollTo(0, 0);
                              setAboutVisible(false);
                            }}
                            className={activeService === index ? "active" : ""}
                            style={{ cursor: "pointer" }} // Makes it look clickable
                          >
                            {service.name}
                          </p>

                          
                        ))}
                      </div>
                    </div>
                  )}
                </li>
 
                <li>
                  <Link to="/contactus" onClick={() => window.scrollTo(0, 0)}>
                    Contact Us
                  </Link>
                </li>
                {/* Services Dropdown */}
                  <li
                    className="dropdown"
                    onMouseEnter={() => setDropdownVisible(true)}
                  >
                    <Link to="#" className="dropbtn" onClick={(e) => e.preventDefault()}>
                      Services
                    </Link>

                  {isDropdownVisible && (
                    <div
                      className="dropdown-content"
                      onMouseEnter={() => setDropdownVisible(true)}
                      onMouseLeave={() => setDropdownVisible(false)}
                    >
                      {/* Left Column - Service List */}
                      <div className="dropdown-left">
                        {servicesInfo.map((service, index) => (
                          <p
                            key={index}
                            onMouseEnter={() => setActiveService(index)}
                            onClick={() => {
                              navigate(service.path);
                              window.scrollTo(0, 0);
                              setDropdownVisible(false);
                            }}
                            className={activeService === index ? "active" : ""}
                            style={{ cursor: "pointer" }} // Makes it look clickable
                          >
                            {service.name}
                          </p>

                          
                        ))}
                      </div>

                      {/* Right Column - Service Details */}
                      <div className="dropdown-right">
                        {activeService !== null && servicesInfo[activeService] &&(
                          <div>
                            <h3>{servicesInfo[activeService].name}</h3>
                            <p>{servicesInfo[activeService].description}</p>
                            <img
                              src={servicesInfo[activeService].image}
                              alt={servicesInfo[activeService].name}
                              className="dropdown-image"
                            />
                            <ul className="service-links">
                              {servicesInfo[activeService].links.map((link, i) => (
                                <li key={i}>
                                  <Link
                                    to={link.path}
                                    onClick={() => {
                                      window.scrollTo(0, 0);
                                      setDropdownVisible(false);
                                    }}
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>


 
              </ul>
            </nav>
          </div>


      <div className="navbar">
          {/* Hamburger Icon for Mobile */}
          <button 
            className="hamburger-menu" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
        <Menu size={24} />
          </button>

      {/* Menu Links - Toggle Visibility Based on isMenuOpen */}
      <div className={`menu-links ${isMenuOpen ? "open" : ""}`}>
      <ul className="menu">
        {/* Who Are We Dropdown */}
        <li
            className="dropdown"
            onClick={(e) => {
              e.stopPropagation();
              setOpenDropdown(openDropdown === "whoAreWe" ? null : "whoAreWe");
            }}
          >

          <span className="menu-item">
            Who Are We <ChevronDown size={16} className="icon" />
          </span>
          {openDropdown === "whoAreWe" && (
            <ul className="dropdown-menu">
               <li><Link to="/about-us" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>About Us</Link></li>
              <li><Link to="/vision-mission" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Vision & Mission</Link></li>
              <li><Link to="/technologies" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Technologies</Link></li>
              <li><Link to="/methodologies" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Methodology</Link></li>
              <li><Link to="/payments" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>How To Make Payments</Link></li>
              <li><Link to="/careers" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>We are Hiring</Link></li>
            </ul>
          )}
        </li>

        <li className="menu-item"><Link to="/contactus" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Contact Us</Link></li>

        
        {/* Services Dropdown */}
        <li
          className="dropdown"
          onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
        >
          <span className="menu-item">
            Services <ChevronDown size={16} className="icon" />
          </span>
          {openDropdown === "services" && (
            <ul className="dropdown-menu">
              {/* Web Development */}
              <li
                className="dropdown"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenSubDropdown(openSubDropdown === "webDevelopment" ? null : "webDevelopment");
                }}
              >
                <span className="menu-item">Web Development <ChevronDown size={12} /></span>
                {openSubDropdown === "webDevelopment" && (
                  <ul className="nested-menu">
                    <li><Link to="/services/websitedevelopment" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Dynamic Website Development</Link></li>
                    <li><Link to="/services/ecommerce" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>E-Commerce Website</Link></li>
                    <li><Link to="/services/pwa" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>PWA</Link></li>
                    <li><Link to="/services/cms" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>CMS-Based Design</Link></li>
                    <li><Link to="/services/spa" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>SPA</Link></li>
                  </ul>
                )}
              </li>

              {/* Graphic Designing */}
              <li
                className="dropdown"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenSubDropdown(openSubDropdown === "graphicDesign" ? null : "graphicDesign");
                }}
              >
                <span className="menu-item">Graphic Designing <ChevronDown size={12} /></span>
                {openSubDropdown === "graphicDesign" && (
                  <ul className="nested-menu">
                    <li><Link to="/services/visual-identity" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Click Here</Link></li>
                    </ul>
                )}
              </li>

              {/* App Development */}
              <li
                className="dropdown"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenSubDropdown(openSubDropdown === "appDevelopment" ? null : "appDevelopment");
                }}
              >
                <span className="menu-item">App Development <ChevronDown size={12} /></span>
                {openSubDropdown === "appDevelopment" && (
                  <ul className="nested-menu">
                   <li><Link to="/services/mobile-development" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Android Development</Link></li>
                   <li><Link to="/services/ios-development" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>iOS App Development</Link></li>
                  </ul>
                )}
              </li>

              {/* Digital Marketing */}
              <li
                className="dropdown"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenSubDropdown(openSubDropdown === "digitalMarketing" ? null : "digitalMarketing");
                }}
              >
                <span className="menu-item">Digital Marketing <ChevronDown size={12} /></span>
                {openSubDropdown === "digitalMarketing" && (
                  <ul className="nested-menu">
                    <li><Link to="/services/seo" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>SEO</Link></li>
                    <li><Link to="/services/email-marketing" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Email Marketing</Link></li>
                    <li><Link to="/services/content-marketing" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Content Marketing</Link></li>
                    <li><Link to="/services/social-media" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Social Media Marketing</Link></li>
                    <li><Link to="/services/lead-generation" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Lead Generation & Analytics</Link></li>
                  </ul>
                )}
              </li>

              {/* Payment Gateway */}
              <li
                className="dropdown"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenSubDropdown(openSubDropdown === "paymentGateway" ? null : "paymentGateway");
                }}
              >
                <span className="menu-item">Payment Gateway <ChevronDown size={12} /></span>
                {openSubDropdown === "paymentGateway" && (
                  <ul className="nested-menu">
                    <li><Link to="/services/paymentgateway" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Click Here</Link></li>
                    
                  </ul>
                )}
              </li>

              {/* Other Services */}
              <li
                className="dropdown"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenSubDropdown(openSubDropdown === "otherServices" ? null : "otherServices");
                }}
              >
                <span className="menu-item">Other Services <ChevronDown size={12} /></span>
                {openSubDropdown === "otherServices" && (
                  <ul className="nested-menu">
                     <li><Link to="/services/ad-films" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Ad Films</Link></li>
                    <li><Link to="/services/photoshoot" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>PhotoShoot</Link></li>
                    <li><Link to="/services/video-production" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Video Production</Link></li>
                    <li><Link to="/services/content-writing" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Content Writing</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        {/* Other Menu Items */}

       </ul>
    </div>



  </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
