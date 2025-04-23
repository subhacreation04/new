import React from 'react'
import Slider from "react-slick";
import './HomeSlider.css'
import { Link } from "react-router-dom";
import one from "../../assets/wd.jfif";
import two from "../../assets/ecommerce-website.jpg";
import three from "../../assets/ad.jfif";
import four from "../../assets/dm.jfif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
      };
    
      const slides = [
        {
          img: one,
          title: "Website Development",
          slogan: "Crafting Digital Excellence for the Modern Era.",
          info: "We create responsive and optimized websites for businesses and individuals.",
          link: "/services/websitedevelopment",
        },
        {
          img: two,
          title: "E-Commerce Website ",
          slogan: "Empowering Online Stores with Seamless Shopping Experiences.",
          info: "Develop feature-rich e-commerce platforms with secure payment integrations.",
          link: "/services/ecommerce",
        },
        {
          img: three,
          title: "Mobile App Development",
          slogan: "Innovating on the Go with Cutting-Edge Mobile Apps.",
          info: "Build high-performance mobile applications for Android and iOS.",
          link: "/services/mobile-development",
        },
        {
          img: four,
          title: "Digital Marketing Services",
          slogan: "Elevate Your Brand Presence in the Digital World.",
          info: "Grow your business online with SEO, social media, and advertising services.",
          link: "/services/seo",
        },
      ];
  return (
    <div className='homepage'>
      
        <div className="homepage-slider">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="homepage-slide">
                <div className="homepage-slide-image">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="homepage-slide-text">
                  <h1>{slide.title}</h1>
                  <h2>{slide.slogan}</h2>
                  <p>{slide.info}</p>
                  <Link to={slide.link}>
                    <button className="read-more-btn">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  )
}

export default HomeSlider