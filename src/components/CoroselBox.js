import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CoroselBox.css";
import coroselImg from "../images/businessWallpaper.png";
import businessMeeting from "../images/businessMeeting.jpg";
import businessPlanning from "../images/businessPlanning.jpg";
import businessOffice from "../images/businessOffice.jpg";
import leftArrowImg from "../images/coroselLeftArrow.svg";
import rightArrowImg from "../images/coroselRightArrow.svg";
import { NavLink } from "react-router-dom";

const CoroselBox = () => {
  const windowDisplayWidth = window.innerWidth;
  let setting;
  if (windowDisplayWidth >= 601) {
    setting = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScrol: 3,
      autoPlaySpeed: 2000,
    };
  } else if (windowDisplayWidth <= 600 && windowDisplayWidth >= 501) {
    setting = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 2,
      slidesToScrol: 2,
      autoPlaySpeed: 2000,
    };
  } else if (windowDisplayWidth <= 500) {
    setting = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScrol: 1,
      autoPlaySpeed: 2000,
    };
  }

  return (
    <div>
      <span className="corosel-control-box left-control">
        <img src={leftArrowImg} alt="left-arrow"></img>
      </span>
      {/* <div className="corosel-container"> */}
      <div className="corosel-container">
        <Slider {...setting}>
          <div className="corosel-box c1">
            <img
              className="corosel-img"
              src={coroselImg}
              alt="img-picture"
            ></img>
            <div className="over-lay">
              <NavLink
                to="/products"
                style={{ textDecoration: "none", color: "#fff;" }}
                className="over-lay-text"
              >
                Products
              </NavLink>
            </div>
          </div>

          <div className="corosel-box c2">
            <img
              className="corosel-img"
              src={businessMeeting}
              alt="img-picture"
            ></img>
            <div className="over-lay">
              <NavLink
                to="/clients"
                style={{ textDecoration: "none", color: "#fff;" }}
                className="over-lay-text"
              >
                Clients
              </NavLink>
            </div>
          </div>
          <div className="corosel-box c3">
            <img
              className="corosel-img"
              src={businessPlanning}
              alt="img-picture"
            ></img>
            <div className="over-lay">
              <NavLink
                to="/achievements"
                style={{ textDecoration: "none", color: "#fff;" }}
                className="over-lay-text"
              >
                Achievements
              </NavLink>
            </div>
          </div>
          <div className="corosel-box c4">
            <img
              className="corosel-img"
              src={businessOffice}
              alt="img-picture"
            ></img>
            <div className="over-lay">
              <NavLink
                to="/contact-us"
                style={{ textDecoration: "none", color: "#fff;" }}
                className="over-lay-text"
              >
                Contact-Office
              </NavLink>
            </div>
          </div>
        </Slider>
      </div>
      <span className="corosel-control-box right-control">
        <img src={rightArrowImg} alt="right-arrow"></img>
      </span>
    </div>
  );
};
export default CoroselBox;
