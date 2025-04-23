import React from 'react'
import "./Industries.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  ecommerce from "../../assets/Industries/ecommerce.jfif"
import  Elearning from "../../assets/Industries/E-learning.jpg"
import  RestaurantsFoodDelivery from "../../assets/Industries/RestaurantsFood Delivery .jpg"
import  healthCare from "../../assets/Industries/healthCare.jpg"
import  PersonalBranding from "../../assets/Industries/PersonalBranding.jfif"
import  coprateBusiness from "../../assets/Industries/coprateBusiness.jpg"
import  bankingFinance from "../../assets/Industries/bankingFinance.jpg"
import  realEstate from "../../assets/Industries/realEstate.png"
import  travelTourism from "../../assets/Industries/travelTourism.jpg"
import  saasApp from "../../assets/Industries/saasApp.jfif"
import  FashionApparel from "../../assets/Industries/FashionApparel.png"
const industries = [
    { 
      title: "E-commerce", 
      description: "Custom online stores with secure payment integration", 
      image: ecommerce 
    },
    { 
      title: "Corporate & Business", 
      description: "Professional websites for companies, agencies, and startups", 
      image: coprateBusiness
    },
    { 
      title: "Portfolio & Personal Branding", 
      description: "Showcasing work for designers, artists, and influencers", 
      image: PersonalBranding 
    },
    { 
      title: "Education & E-Learning", 
      description: "Online courses, Learning Management Systems (LMS), and tutoring platforms", 
      image: Elearning
    },

    { 
        title: "Healthcare & Medical", 
        description: "Websites for hospitals, clinics, telemedicine, and online pharmacies", 
        image: healthCare
      },

      { 
        title: "Finance & Banking", 
        description: "Secure portals for banking, investments, and insurance", 
        image: bankingFinance
      },

      { 
        title: "Real Estate ", 
        description: "Property listings, virtual tours, and agent websites", 
        image: realEstate
      },

      { 
        title: "Restaurants & Food Delivery", 
        description: "Online ordering, reservations, and delivery tracking", 
        image: RestaurantsFoodDelivery
      },
      { 
        title: "Travel & Hospitality ", 
        description: "Hotel bookings, tourism platforms, and travel agency websites", 
        image: travelTourism
      },
      { 
        title: "Technology & SaaS ", 
        description: "Landing pages for software products and IT services", 
        image: saasApp
      },
      { 
        title: "Fashion & Apparel ", 
        description: "E-commerce websites for clothing brands and accessories", 
        image: FashionApparel
      },

    // Add more industries with their respective images
  ];
  

const Industries = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of slides to show at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1440, // Adjust for tablets
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1024, // Adjust for tablets
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600, // Adjust for mobile devices
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
    return (
        <div className="industries-container">
          <h2 className="industries-heading">Industries We Serve</h2>
          <Slider {...settings}>
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="card-content">
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="industry-image"
                  />
                  <div className="card-text">
                    <h3 className="industry-title">{industry.title}</h3>
                    <p className="industry-description">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      );
    };
export default Industries