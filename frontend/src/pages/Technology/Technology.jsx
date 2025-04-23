import React from "react";
import { motion } from "framer-motion";
import "./Technology.css";
import android from "../../assets/android.png";
import angular from "../../assets/angular.png";
import ios from "../../assets/ios.png";
import html5 from "../../assets/html5.png";
import php from "../../assets/php.png";
import mysql from "../../assets/mysql.png";
import node from "../../assets/node.png";
import react from "../../assets/react-js.png";
import asp from "../../assets/asp-net.png";
import java from "../../assets/java.png";
import flutter from "../../assets/flutter.png";
import magento from "../../assets/magento.png";

const technologies = [
  { name: "Android", icon: android },
  { name: "Angular", icon: angular },
  { name: "ASP.NET", icon: asp },
  { name: "iOS", icon: ios },
  { name: "Java", icon: java },
  { name: "ReactJs", icon: react },
  { name: "MySQL", icon: mysql },
  { name: "Flutter", icon: flutter },
  { name: "NodeJS", icon: node },
  { name: "HTML5", icon: html5 },
  { name: "PHP", icon: php },
  { name: "Magento", icon: magento },
];

const Technology = () => {
  return (
    <div className="technology-container">
      <motion.h2 
        className="title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Technology Expertise
      </motion.h2>

      <div className="grid-container">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="tech-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="tech-icon">
              <img src={tech.icon} alt={tech.name} />
            </div>
            <span className="tech-name">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
