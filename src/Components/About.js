import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgrounImage from "../Assets/about-background-image.png";
import {BsFillPlayCircleFill} from "react-icons/bs";
const About = () => {
  return (
    <div className='about-section-container'>
      <div className="about-background-image-container">
        <img src={AboutBackground}/>
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgrounImage}/>
      </div>
      <div className="about-section-text-container">
        <p className='primary-subheading'>
            About
        </p>
        <h1 className='primary-text'>
            Food Is An Importent Part of A Balanced Diet
        </h1>
        <p className='primary-text'>
        we are committed to providing you with an unforgettable dining experience. Nestled in the heart of, 
        our restaurant offers a cozy and inviting atmosphere that sets the stage for culinary excellence.
        </p>
        <p className='primary-text'>
        What sets us apart is our dedication to quality. 
        We source the finest ingredients, locally and globally, 
        to ensure that each dish is a masterpiece of flavor and freshness. 
        </p>
        <div className="about-buttons-container">
            <button className='secondary-button'>Learn More</button>
            <button className='watch-video-button'>{" "}
            <BsFillPlayCircleFill/> Watch video
            </button>
        </div>
      </div>
    </div>
  )
}

export default About
