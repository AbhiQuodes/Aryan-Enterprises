import React, { useState, useEffect,useRef } from "react";
import "./ProductPage.css";
import { NavLink } from "react-router-dom";
import HeaderBar from "../components/HeaderBar";
import FootNavBar from "../components/FootNavBar";
import LoadingBar from "react-top-loading-bar";
import { useLocation } from "react-router-dom";
import FooterBar from "../components/FooterBar";
import ProductContainer from "../components/ProductContainer";
import Aos from "aos";
import "aos/dist/aos.css";
import dropDown from "../images/dropDown.png";
import MeasuringTools from "../images/MeasuringTools.jpeg";
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

const ProductPage = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  Aos.init();
  const dropDownImg = useRef();
  const [displayWidth,setDisplayWidth] =useState( window.innerWidth);
  const [expandedProductBox ,setExpandedProductBox]=useState(null);
  const handleExpand =(index)=>{
    setExpandedProductBox( expandedProductBox=== index ? null : index)
  }
    const productBoxList  =useRef();
    const productDetails = [
      { name: "Measuring Tools", image: MeasuringTools },
      { name: "Grinding Wheel", image: GrindingWheel },
      { name: "Cutting Tools", image: CuttingTools },
      { name: "Hand Tools", image: HandTools },
      { name: "Pneumatic Tools", image: PneumaticTools },
      { name: "Band Saw Blades", image: BandSawBlades },
      { name: "Power Saw Blades", image: PowerSawBlades },
      { name: "All Filter Elements (Air, Water, Coolant)", image: AirWaterCoolantFilterElements },
      { name: "Bellows Cover", image: BellowsCover },
      { name: "Telescopic Cover", image: TelescopicCover },
      { name: "S.S. Wire Brush", image: SSWireBrush },
    ];
  const handleDropDownClick = (event) => {
    if (!dropDownImg.current.classList.contains("rotate-icon")) {
      dropDownImg.current.classList.add("rotate-icon");
      // productBoxList.current.style.display = "flex";
    } else {
      dropDownImg.current.classList.remove("rotate-icon");
      // productBoxList.current.style.display = "none";
    }

    
    }
  const handleHeadLinksLoader = () => {
    const controlProgress = setInterval(() => {
      setProgress((previousProgress) => {
        if (previousProgress >= 100) {
          clearInterval(controlProgress);
          return;
        }
        return previousProgress + (Math.random() * (9 - 7) + 7) * 10;
        //generating numbers from  2 to 5
      });
    }, 500);
  };
  useEffect(() => {
    handleHeadLinksLoader();
  }, []);

  return (
    <div>
      <LoadingBar
        color="#f11946"
        height={3}
        waitingTime={500}
        transitionTime={100}
        progress={progress}
        onLoaderFinished={() => {
          setProgress(0);
        }}
      ></LoadingBar>
      <HeaderBar handleHeadLinksLoader={handleHeadLinksLoader}></HeaderBar>
      <div className="container">
        <section
          className="product-container"
          data-aos="fade"
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
                  className="product-contact-box-list-item"
                  ref={productBoxList}
                  key={idx}
                >
                  {" "}
                  {/* <img src="dsndhgh" alt="product-img">
                 </img>*/}
                 <div className="product-contact">
                  <h3 className="product-name">{eachProduct.name}</h3>
                  <div className="btn-box">

                 <a href={`tel:${9529909387}`}> <button className='call-btn btn'>Call</button></a>
                 <a href={`https://wa.me/${9529909387}`}
                 target="_blank"
                 rel="noopener noreferrer"> <button 
                  className='Whatsapp-btn btn'>Whatsapp</button></a>
                 </div>
                  </div>
                  

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
        </section>
      </div>
      <FooterBar></FooterBar>
    </div>
  );
};
export default ProductPage;
