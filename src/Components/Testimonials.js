import React from "react";
import ProfilePic from "../Assets/nimna-lakmi.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Discover what our guests are saying about their experiences at Foodie . From rave reviews to heartfelt testimonials, our guests' words speak volumes about the quality of our food and service.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "Absolutely divine! The food at [Restaurant Name] is a culinary delight. Every dish is bursting with flavor and made with the freshest ingredients."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Nimna Lakmi</h2>
      </div>
    </div>
  );
};

export default Testimonial;
