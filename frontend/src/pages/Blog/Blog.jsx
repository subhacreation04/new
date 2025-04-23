import React from 'react'
import './Blog.css'
import about from '../../assets/blog.jpg';

const Blog = () => {
  return (
   <>
     <div className="aboutUs-dev-container">
        <div className="aboutUs-content">
          <h1>Blog</h1>
          <h2>Subha Creation is a leading firm based in India with the primary objective to provide best services to improve the overall growth of our client’s business.</h2>
        </div>
        <div className="aboutUs-image">
          <img src={about} alt="About Us Development" />
        </div>
    </div>
  
   
   </>
  )
}

export default Blog