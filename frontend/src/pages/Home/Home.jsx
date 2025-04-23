import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Customer from "../CustomerInfo/Customer";
import Service_list from "../ServicesList/Service_list";
import ClientSlider from "../ClientSlider/ClientSlider";
import Footer from "../Footer/Footer";
import HomeSlider from "../HomeSlider/HomeSlider";
import Why from "../Why/Why";

const Home = () => {
  

  return (
    <div className="homepage-container">
      <HomeSlider/>
      <br /><br />
      <Customer />
    <Why/>
      <Service_list />
    
 
      <br></br>
      <Footer/>
    </div>
  );
};

export default Home;
