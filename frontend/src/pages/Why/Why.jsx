import React from 'react'
import './Why.css'
import wcu from "../../assets/why_choose_us.jpg";
const Why = () => {
  return (
    <div>
         <div className="homepage-choose">
        <h1 className="homepage-choose-title">Why Choose Us?</h1>
        <div className="homepage-choose-content">
          <div className="homepage-choose-left">
            <ul className="homepage-choose-list">
              <li>
                <span className="homepage-list-icon">📈</span> Proven strategies backed by data.
              </li>
              <li>
                <span className="homepage-list-icon">💰</span> Affordable solutions for businesses of all sizes.
              </li>
              <li>
                <span className="homepage-list-icon">👨‍💻</span> Expert team with years of industry experience.
              </li>
              <li>
                <span className="homepage-list-icon">⏱️</span> Round-the-clock support for seamless communication.
              </li>
            </ul>
          </div>

          <div className="homepage-choose-right">
            <img src={wcu} alt="Why Choose Us" className="homepage-choose-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why