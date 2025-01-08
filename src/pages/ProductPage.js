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
// import MeasuringTools from "../images/MeasuringTools.jpeg";
// import GrindingWheel from "../images/GrindingWheel.jpeg";
// import CuttingTools from "../images/CuttingTools.jpeg";
// import HandTools from "../images/HandTools.jpeg";
// import PneumaticTools from "../images/PneumaticTools.jpeg";
// import BandSawBlades from "../images/BandSawBlades.jpeg";
// import PowerSawBlades from "../images/PowerSawBlades.jpeg";
// import AirWaterCoolantFilterElements from "../images/AirWaterCoolantFilterElements.jpeg";
// import BellowsCover from "../images/BellowsCover.jpeg";
// import TelescopicCover from "../images/TelescopicCover.jpeg";
// import SSWireBrush from "../images/SSWireBrush.jpeg";





// import MeasuringTools from "../images/MeasuringTools.jpeg";
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

import gaugeImg1 from "../images/gauge1.png";
import gaugeImg2 from "../images/gauge2.png";
import gaugeImg3 from "../images/gauge3.png";
import gaugeImg4 from "../images/gauge4.png";
import gaugeImg5 from "../images/gauge5.png";
import gaugeImg6 from "../images/gauge6.png";
import gaugeImg7 from "../images/gauge7.png";
import gaugeImg8 from "../images/gauge8.png";
import gaugeImg9 from "../images/gauge9.png";
import gaugeImg10 from "../images/gauge10.png";
import gaugeImg11 from "../images/gauge11.png";
import gaugeImg12 from "../images/gauge12.png";
import gaugeImg13 from "../images/gauge13.png";
import gaugeImg14 from "../images/gauge14.png";
import gaugeImg15 from "../images/gauge15.png";
import gaugeImg16 from "../images/gauge16.png";
import gaugeImg17 from "../images/gauge17.png";
import gaugeImg18 from "../images/gauge18.png";
import gaugeImg19 from "../images/gauge19.png";

import indicatorImg1 from "../images/indicator1.jpg";
import indicatorImg2 from "../images/indicator2.jpg";

import measurementImg1 from "../images/measurement1.jpg";
import measurementImg2 from "../images/measurement2.jpg";
import measurementImg3 from "../images/measurement3.jpg";
import measurementImg4 from "../images/measurement4.jpg";
import measurementImg5 from "../images/measurement5.jpg";
import measurementImg6 from "../images/measurement6.jpg";
import measurementImg7 from "../images/measurement7.jpg";
import measurementImg8 from "../images/measurement8.jpg";
import measurementImg9 from "../images/measurement9.jpg";
import measurementImg10 from "../images/measurement10.jpg";

import micrometerImg1 from "../images/micrometer1.jpg";
import micrometerImg2 from "../images/micrometer2.jpg";
import micrometerImg3 from "../images/micrometer3.jpg";
import micrometerImg4 from "../images/micrometer4.jpg";
import micrometerImg5 from "../images/micrometer5.jpg";
import micrometerImg6 from "../images/micrometer6.jpg";
import micrometerImg7 from "../images/micrometer7.jpg";
import micrometerImg8 from "../images/micrometer8.jpg";
import micrometerImg9 from "../images/micrometer9.jpg";
import micrometerImg10 from "../images/micrometer10.jpg";
import micrometerImg11 from "../images/micrometer11.jpg";
import micrometerImg12 from "../images/micrometer12.jpg";
import micrometerImg13 from "../images/micrometer13.jpg";
import micrometerImg14 from "../images/micrometer14.jpg";
// import micrometerImg15 from "../images/micrometer15.jpg";

import plungerImg1 from "../images/plunger1p12.png";
import plungerImg2 from "../images/plunger2p12.png";
import plungerImg3 from "../images/plunger3p12.png";
import plungerImg4 from "../images/plunger4p12.png";
import plungerImg5 from "../images/plunger5p12.png";
import plungerImg6 from "../images/plunger6p12.png";

import ringImg1 from "../images/ring1.jpg";
import ringImg2 from "../images/ring2.jpg";

import threadpitchImg from "../images/threadpitch.jpg";
import trapezoidalImg from "../images/trapezoidal.jpg";




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
    // const productDetails = [
    //   { name: "Measuring Tools", image: MeasuringTools },
    //   { name: "Grinding Wheel", image: GrindingWheel },
    //   { name: "Cutting Tools", image: CuttingTools },
    //   { name: "Hand Tools", image: HandTools },
    //   { name: "Pneumatic Tools", image: PneumaticTools },
    //   { name: "Band Saw Blades", image: BandSawBlades },
    //   { name: "Power Saw Blades", image: PowerSawBlades },
    //   { name: "All Filter Elements (Air, Water, Coolant)", image: AirWaterCoolantFilterElements },
    //   { name: "Bellows Cover", image: BellowsCover },
    //   { name: "Telescopic Cover", image: TelescopicCover },
    //   { name: "S.S. Wire Brush", image: SSWireBrush },
    // ];

  const productDetails = [
    // { name: "Measuring Tools", image: MeasuringTools },
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

    { name: "product-name-display", image: gaugeImg1 },
    { name: "product-name-display", image: gaugeImg2 },
    { name: "product-name-display", image: gaugeImg3 },
    { name: "product-name-display", image: gaugeImg4 },
    { name: "product-name-display", image: gaugeImg5 },
    { name: "product-name-display", image: gaugeImg6 },
    { name: "product-name-display", image: gaugeImg7 },
    { name: "product-name-display", image: gaugeImg8 },
    { name: "product-name-display", image: gaugeImg9 },
    { name: "product-name-display", image: gaugeImg10 },
    { name: "product-name-display", image: gaugeImg11 },
    { name: "product-name-display", image: gaugeImg12 },
    { name: "product-name-display", image: gaugeImg13 },
    { name: "product-name-display", image: gaugeImg14 },
    { name: "product-name-display", image: gaugeImg15 },
    { name: "product-name-display", image: gaugeImg16 },
    { name: "product-name-display", image: gaugeImg17 },
    { name: "product-name-display", image: gaugeImg18 },
    { name: "product-name-display", image: gaugeImg19 },

    { name: "product-name-display", image: measurementImg1 },
    { name: "product-name-display", image: measurementImg2 },
    { name: "product-name-display", image: measurementImg3 },
    { name: "product-name-display", image: measurementImg4 },
    { name: "product-name-display", image: measurementImg5 },
    { name: "product-name-display", image: measurementImg6 },
    { name: "product-name-display", image: measurementImg7 },
    { name: "product-name-display", image: measurementImg8 },
    { name: "product-name-display", image: measurementImg9 },
    { name: "product-name-display", image: measurementImg10 },

    { name: "product-name-display", image: micrometerImg1 },
    { name: "product-name-display", image: micrometerImg2 },
    { name: "product-name-display", image: micrometerImg3 },
    { name: "product-name-display", image: micrometerImg4 },
    { name: "product-name-display", image: micrometerImg5 },
    { name: "product-name-display", image: micrometerImg6 },
    { name: "product-name-display", image: micrometerImg7 },
    { name: "product-name-display", image: micrometerImg8 },
    { name: "product-name-display", image: micrometerImg9 },
    { name: "product-name-display", image: micrometerImg10 },
    { name: "product-name-display", image: micrometerImg11 },
    { name: "product-name-display", image: micrometerImg12 },
    { name: "product-name-display", image: micrometerImg13 },
    { name: "product-name-display", image: micrometerImg14 },
    // { name: "product-name-display", image:micrometerImg15  },

    { name: "product-name-display", image: plungerImg1 },
    { name: "product-name-display", image: plungerImg2 },
    { name: "product-name-display", image: plungerImg3 },
    { name: "product-name-display", image: plungerImg4 },
    { name: "product-name-display", image: plungerImg5 },
    { name: "product-name-display", image: plungerImg6 },

    { name: "product-name-display", image: ringImg1 },
    { name: "product-name-display", image: ringImg2 },

    { name: "product-name-display", image: threadpitchImg },
    { name: "product-name-display", image: trapezoidalImg },

    { name: "product-name-display", image: indicatorImg1 },
    { name: "product-name-display", image: indicatorImg2 },
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
                  <h3 className="page-product-name">{eachProduct.name}</h3>
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
                 <div className="img-box"> <img
                    className="page-product-image"
                    src={eachProduct.image}
                    alt="product-img"
                  ></img>
                  </div>
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
