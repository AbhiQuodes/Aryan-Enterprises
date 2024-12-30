import React from "react";
import "./FooterBar.css";
import googleIcon from "../images/googleIcon.webp";
import instagramIcon from "../images/instagramIcon.jpg";
import facebookIcon from "../images/facebookIcon.png";
import emailIcon from "../images/emailIcon.png";
import addressIcon from "../images/addressIcon.webp";
import websiteIcon from "../images/websiteIcon.png";
import socialMediaIcon from "../images/socialMediaIcon.png";
const FooterBar = () => {
  return (
    <footer className="footbar-container">
      <ul className="footbar-box-list">
        <li className="footbar-box-list-item">
          <div className="list-item-box">
            <a
              style={{ textDecoration: "none" }}
              href="https://maps.app.goo.gl/ew5ZS9qxuXTuFrWC8"
              target="_blank"
            >
              <b>Address</b>
              <img
                className="footer-icons"
                src={addressIcon}
                alt="address-icon"
              ></img>
            </a>
            <div className="list-item-box-content">
              <a
                style={{ textDecoration: "none" }}
                href="https://maps.app.goo.gl/ew5ZS9qxuXTuFrWC8"
                target="_blank"
                className="list-item-box-content-value"
              >
                B-7 , Hanuman Nagar , Panchvati , Nashik-3. (Maharashtra) Tel
                .(0253) 2303450 Mob . 9922323865
                <iframe
                  className="map-frame"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3748.792588125832!2d73.83150599999999!3d20.017218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDAxJzAyLjAiTiA3M8KwNDknNTMuNCJF!5e0!3m2!1sen!2sin!4v1734867390440!5m2!1sen!2sin"
                  style={{
                    width: "150",
                    height: "50",
                    style: "border:0",
                    allowfullscreen: "",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade",
                  }}
                ></iframe>
              </a>
            </div>
          </div>
        </li>
        <li className="footbar-box-list-item">
          <div className="list-item-box">
            <a style={{ textDecoration: "none" }} href="#">
              <b>Website</b>
              <img
                className="footer-icons"
                src={websiteIcon}
                alt="website-icon"
              ></img>
            </a>
            <div className="list-item-box-content">
              <a
                href="https://Aryan-Enterprises.vercel.app"
                className="list-item-box-content-value"
              >
                https://Aryan-Enterprises.vercel.app
              </a>
            </div>
          </div>
        </li>

        <li className="footbar-box-list-item">
          <div className="list-item-box">
            <a style={{ textDecoration: "none" }} href="#">
              <b>Email</b>
              <img
                className="footer-icons"
                src={emailIcon}
                alt="email-icon"
              ></img>
            </a>
            <div className="list-item-box-content">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sonar_aryanenterprisess@yahoo.com"
                target="_blank"
                style={{ textDecoration: "none" }}
                className="list-item-box-content-value"
              >
                sonar_avinash@rediffmail.com
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sonar_avinash@rediffmail.com"
                target="_blank"
                style={{ textDecoration: "none" }}
                className="list-item-box-content-value"
              >
                sonar_aryanenterprisess@yahoo.com
              </a>
            </div>
          </div>
        </li>

        <li className="footbar-box-list-item">
          <div className="list-item-box">
            <a style={{ textDecoration: "none" }} href="#">
              <b> Social </b>
              <img
                className="footer-icons"
                src={socialMediaIcon}
                alt="social-media-icon"
              ></img>
            </a>
            <div className="list-item-box-content">
              <a
                href="www.google.com"
                style={{ textDecoration: "none" }}
                className="list-item-box-content-value"
              >
                google
                <img
                  className="footer-icons"
                  src={googleIcon}
                  alt="email-icon"
                ></img>
              </a>

              <a
                href="www.facebook.com"
                style={{ textDecoration: "none" }}
                className="list-item-box-content-value"
              >
                facebook
                <img
                  className="footer-icons"
                  src={facebookIcon}
                  alt="facebook-icon"
                ></img>
              </a>

              <a
                href="www.instagram.com"
                style={{ textDecoration: "none" }}
                className="list-item-box-content-value"
              >
                Instagram
                <img
                  className="footer-icons"
                  src={instagramIcon}
                  alt="instagram-icon"
                ></img>
              </a>
            </div>
          </div>
        </li>

        {/* <li className="footbar-box-list-item">
        <div className="list-item-box">
          <a style={{ textDecoration: "none" }} href="#"  className="list-item-box-content-value">
            <b>All Rights Reserved by Aryan Enterprises</b>
          </a>
          <div className="list-item-box-content">
          </div>
        </div>
      </li> */}
      </ul>
    </footer>
  );
};

export default FooterBar;
