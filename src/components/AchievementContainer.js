import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AchievementContainer.css";
import Aos from "aos";
import "aos/dist/aos.css";
import certificate1 from "../images/certificate1.jpeg";
import certificate2 from "../images/certificate2.jpeg";
import certificate3 from "../images/certificate3.jpeg";
import certificate4 from "../images/certificate4.jpeg";
import certificate5 from "../images/certificate5.jpeg";

// import './HeaderBar.css';

// data-aos="fade-in" data-aos-duration="600" data-aos-easing="ease-in-sine"

const AchievementContainer = () => {
  let achievementCertificate = [
    { image: certificate1 },
    { image: certificate2 },
    { image: certificate3 },
    { image: certificate4 },
    { image: certificate5 },
  ];
  Aos.init();

  return (
    <section className="achievement-container">
      <div className="achievement-box-title">
        <NavLink to="/achievements">
          <h2 className="achievement-box-title">Our Achievements</h2>
        </NavLink>
      </div>
      <ul className="achievement-box-list">
        {achievementCertificate.map((eachCertificate, idx) => {
          return (
            <li className="achievement-box-list-item">
              {" "}
              <img
                key={idx}
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-easing="ease-in-sine"
                className="each-achievement-img"
                src={eachCertificate.image}
                alt="achievement-img"
              ></img>
              <div className="over-lay"></div>
            </li>
          );
        })}
      </ul>
      <div
        data-aos="fade-in"
        data-aos-delay="100"
        data-aos-duration="600"
        data-aos-easing="ease-in-sine"
        className="achievement-text"
      >
        <span style={{ color: "black", fontSize: "25px" }}>At </span> Aryan
        Enterprises, our journey has been marked by remarkable achievements and
        unwavering dedication to excellence in global trade. As a trusted bridge
        between buyers and sellers of imported and exported products, we have
        consistently delivered beyond expectations, earning prestigious
        certifications that underscore our commitment to the highest industry
        standards. Our accomplishments are further magnified by the overwhelming
        appreciation we have received from our esteemed clients and partners,
        who recognize as a symbol of reliability, integrity, and innovation.
        These accolades are not just milestones but a testament to our
        relentless pursuit of perfection and our vision to redefine success in
        international commerce.
      </div>
    </section>
  );
};

export default AchievementContainer;
