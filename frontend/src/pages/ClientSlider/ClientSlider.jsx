import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ClientSlider.css"; // Custom CSS

// Import client logos
import client1 from "../../assets/google.png";
import client2 from "../../assets/google.png";
import client3 from "../../assets/google.png";
import client4 from "../../assets/google.png";

// Array of client images
const clients = [client1, client2, client3, client4];

const ClientSlider = () => {
  const clientSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <motion.div 
      className="client-slider-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        Our Clients
      </motion.h2>
      <Slider {...clientSliderSettings} className="client-slider">
        {clients.map((image, index) => (
          <motion.div 
            key={index} 
            className="client-card-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
          >
            <img
              src={image}
              alt={`Client ${index + 1}`}
              className="client-logo-img"
              loading="lazy"
            />
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default ClientSlider;
