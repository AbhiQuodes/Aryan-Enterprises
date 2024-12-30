import React, { useEffect, useRef, useState } from "react";
import "./IntroductoryBox.css";
import Aos from "aos";
import "aos/dist/aos.css";
import introductionImg from "../images/introductionImg.jpeg";
// data-aos="fade-in" data-aos-duration="600" data-aos-easing="ease-in-sine"

const IntroductoryBox = () => {
  Aos.init({ duration: 200 });
  return (
    <section className="introductory-container">
      <div className="introductory-text-box">
        <div className="introductory-title-box">
          <h2 className="introductory-title">Welcome to Aryan Enterprises!</h2>
        </div>
        <div className="introductory-para">
          <div className="para-img-box">
            <img
              className="para-img"
              src={introductionImg}
              alt="intro-image"
            ></img>
          </div>
          <div className="introductory-text">
            {" "}
            <span style={{ color: "black", fontSize: "25px" }}>We </span>{" "}
            specialize in connecting buyers and sellers in the dynamic world of
            imports and exports. Our mission is to simplify global trade by
            acting as a trusted intermediary, ensuring smooth transactions and
            building lasting business relationships. Whether you're looking to
            source quality products or expand your market reach, Aryan
            Enterprises is here to help you achieve your goals with
            professionalism and reliability. Explore our website to learn more
            about our services and how we can support your business.
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductoryBox;
