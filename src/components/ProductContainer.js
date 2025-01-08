import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ProductContainer.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import dropDown from "../images/dropDown.png";
import measurementTool10 from "../images/measurement10.jpg";
import GrindingWheel from "../images/GrindingWheel.jpeg";
import CuttingTools from "../images/CuttingTools.jpeg";
import HandTools from "../images/HandTools.jpeg";
import PneumaticTools from "../images/PneumaticTools.jpeg";
import BandSawBlades from "../images/BandSawBlades.jpeg";
import PowerSawBlades from "../images/PowerSawBlades.jpeg";
import AirWaterCoolantFilterElements from "../images/AirWaterCoolantFilterElements.jpeg";
import BellowsCover from "../images/BellowsCover.jpeg";
import TelescopicCover from "../images/TelescopicCover.jpeg";
import SSWireBrush from "../images/SSWireBrush.jpeg";

const ProductContainer = () => {
  Aos.init();
  const dropDownImg = useRef();
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
  const [expandedProductBox, setExpandedProductBox] = useState(null);
  const handleExpand = (index) => {
    setExpandedProductBox(expandedProductBox === index ? null : index);
  };
  const navigatePath = useNavigate();
  const navigateToPage = () => {
    setTimeout(() => {
      navigatePath("/products");
    }, 100);
  };
  const productBoxList = useRef();
  const productDetails = [
    { name: "Measuring Tools", image: measurementTool10 },
    { name: "Grinding Wheel", image: GrindingWheel },
    { name: "Cutting Tools", image: CuttingTools },
    { name: "Hand Tools", image: HandTools },
    { name: "Pneumatic Tools", image: PneumaticTools },
    { name: "Band Saw Blades", image: BandSawBlades },
    { name: "Power Saw Blades", image: PowerSawBlades },
    {
      name: "All Filter Elements (Air, Water, Coolant)",
      image: AirWaterCoolantFilterElements,
    },
    { name: "Bellows Cover", image: BellowsCover },
    { name: "Telescopic Cover", image: TelescopicCover },
    { name: "S.S. Wire Brush", image: SSWireBrush },
  ];
  const handleDropDownClick = (event) => {
    console.log(event);
    if (!dropDownImg.current.classList.contains("rotate-icon")) {
      dropDownImg.current.classList.add("rotate-icon");
      // productBoxList.current.style.display = "flex";
    } else {
      dropDownImg.current.classList.remove("rotate-icon");
      // productBoxList.current.style.display = "none";
    }
  };
  return (
  <div className="container-wrapper">
    <div
      className="product-container"
      data-aos="fade"
      data-aos-delay="250"
      data-aos-duration="800"
      data-aos-easing="ease-in-sine"
    >
      <div className="product-box-title">
        <NavLink to="/products">
          <h2 className="product-box-title">Our Products</h2>
        </NavLink>
      </div>
      <ul className="product-box-list">
        {productDetails.map((eachProduct, idx) => {
          return (
            <li
              onClick={() => {
                navigateToPage();
              }}
              className="product-box-list-item"
              ref={productBoxList}
              key={idx}
            >
              {" "}
              {/* <img src="dsndhgh" alt="product-img">
                 </img>*/}
              <h3 className="product-name">{eachProduct.name}</h3>
              {/* <img key={idx}
            ref={dropDownImg}
            src={dropDown}
            alt="dropDown-box-arrow"
           className="product-box-list-arrow"
           onClick={(event)=>{
            handleDropDownClick(event);
           }}
          ></img> */}
              <img
                className="product-image"
                src={eachProduct.image}
                alt="product-img"
              ></img>
            </li>
          );
        })}
      </ul>
      <NavLink to="/products">
          <h4 className="link-more-products">more products..</h4>
        </NavLink>
    </div>
    </div>  
  );
};

export default ProductContainer;
