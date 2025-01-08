import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactContainer.css";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactContainer = () => {
  Aos.init();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertt, setalertt] = useState("");

  const sendResponseEmail = (e) => {
    if (email && message) {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_lgvir2j",
          "template_pd6dqar",
          e.target,
          "cLdebBPtnShamwbpz"
        )
        .then(
          (result) => {},
          (error) => {
            alertt("Some Error Occured" + error.text);
          }
        );
    }
  };

  const sendInitialEmail = (e) => {
    if (email && message) {
      sendResponseEmail(e);
      setalertt("Sending Email...");
      e.preventDefault();
      emailjs
        .sendForm(
          "service_lgvir2j",
          "template_txobfh5",
          e.target,
          "cLdebBPtnShamwbpz"
        )
        .then(
          (result) => {
            setalertt("Email Sent Successfully!");
            setEmail("");
            setMessage("");
            setTimeout(() => {
              setalertt("");
            }, 3000);
          },
          (error) => {
            alert("Some Error Occured" + error.text);
            setalertt("");
          }
        );
    }
  };

  return (
    <div>
      <div className="contact-page">
        <div className="contact-container">
          <div className="page-heading">
            <h2 className="font-bold">Contact us</h2>
            <hr />
          </div>
          <div
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            className="contact-box"
          >
            <form className="contact-box-form" onSubmit={sendInitialEmail}>
              <h4 className="contact-head">Quick Contact</h4>
              {alertt && (
                <div style={{ fontSize: "18px" }} color="success">
                  {alertt}
                </div>
              )}
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-id-input"
              ></input>

              <input
                type="text"
                name="from_name"
                className="email-id-input display-none"
                style={{ display: "none" }}
              ></input>

              <input
                className="email-msg-input"
                type="textarea"
                placeholder="message"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              ></input>
              <div className="btn-box">
                <button className="email-submit-btn">Submit</button>
              </div>

              {/* <div className="msg-display-box">
                  <p>
                    We value your feedback and suggestions! If you have any
                    questions, comments, or inquiries, please do not hesitate to
                    reach out to us. Our team is here to assist you.
                  </p>
                </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
