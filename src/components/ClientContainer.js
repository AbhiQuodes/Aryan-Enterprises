import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ClientContainer.css";
import Marquee from "react-fast-marquee";
import Aos from "aos";
import "aos/dist/aos.css";
import clientSymbol from "../images/clientSymbol.jpeg";
import clientHalImg from "../images/clientHalImg.jpeg";

// import './HeaderBar.css';

// data-aos="fade-in" data-aos-duration="600" data-aos-easing="ease-in-sine"

const ClientContainer = () => {
  const clientRef = useRef();
  const handleMouseEnter = () => {
    if (clientRef.current) {
      clientRef.current.stop();
    }
  };
  const handleMouseLeave = () => {
    if (clientRef.current) {
      clientRef.current.start();
    }
  };
  let clientDetails = [
    { naame: "Hindustan Aeronautics Limited (HAL Ozar)", image: clientHalImg },
    { naame: "Hindustan Aeronautics Limited (HAL Ozar)", image: clientHalImg },
    { naame: "Hindustan Aeronautics Limited (HAL Ozar)", image: clientHalImg },
    { naame: "Hindustan Aeronautics Limited (HAL Ozar)", image: clientHalImg },
    { naame: "Hindustan Aeronautics Limited (HAL Ozar)", image: clientHalImg },
    { naame: "Hindustan Aeronautics Limited (HAL Ozar)", image: clientHalImg },
    { naame: "Hindustan Aeronautics Limited (HAL Ozar)", image: clientHalImg },
    { naame: "Hindustan Aeronautics Limited (HAL Ozar)", image: clientHalImg },
    { naame: "Hindustan Aeronautics Limited (HAL Ozar)", image: clientHalImg },
    // { naame: "Hindustan Aeronautics Limited (HAL Ozar)", image: clientHalImg },
  ];
  Aos.init();

  return (
    <section className="client-container">
      <div className="client-box-title">
        <NavLink to="/clients">
          <h2 className="client-box-title">Our Clients</h2>
        </NavLink>
      </div>
      <ul className="client-box-list">
        <li className="client-box-list-item">
          {" "}
          <img
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
            className="client-icon-img"
            src={clientSymbol}
            alt="product-img"
          ></img>
          <div
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
            className="client-box-list-item-text"
          >
            <span style={{ color: "black", fontSize: "25px" }}>At </span> Aryan
            Enterprises, our clients are the cornerstone of our business. We
            collaborate closely with both buyers and sellers to build strong,
            trust-based relationships that ensure seamless import and export
            transactions. Our work involves understanding client needs, sourcing
            high-quality products, and facilitating efficient communication and
            logistics. We are committed to delivering exceptional service,
            fostering long-term partnerships, and supporting our clients'
            success in the global market.
          </div>
        </li>
      </ul>
      <div className="client-name-box">
        <marquee
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={clientRef}
          speed={100}
          behavior="scroll"
          className="client-name-box-marquee"
        >
          {clientDetails.map((eachClient, idx) => {
            return (
              // <span>
              <div className="each-client-box" key={idx}>
                <img
                  src={eachClient.image}
                  className="each-client-img"
                  alt="client-img"
                ></img>
                <h3 className="client-name">{eachClient.naame}</h3>
              </div>
              // </span>
            );
          })}
        </marquee>
      </div>
    </section>
  );
};

export default ClientContainer;
