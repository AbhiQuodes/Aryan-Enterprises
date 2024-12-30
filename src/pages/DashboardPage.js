import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DashboardPage.css";
import HeaderBar from "../components/HeaderBar";
import CoroselBox from "../components/CoroselBox";
import FootNavBar from "../components/FootNavBar";
import LoadingBar from "react-top-loading-bar";
import FooterBar from "../components/FooterBar";
import IntroductoryBox from "../components/IntroductoryBox";
import ProductContainer from "../components/ProductContainer";
import ContactContainer from "../components/ContactContainer";
import ClientContainer from "../components/ClientContainer";
import AchievementContainer from "../components/AchievementContainer";
//tried hard but did not succeed in creating the custom hook fot progressControl
// import UseControlProgress from "../customHooks/UseControlProgress";

const DashboardPage = () => {
  const [progress, setProgress] = useState(0);
  const headerBarCmpt = useRef(null);
  const productCmpt = useRef(null);
  const clientCmpt = useRef(null);
  const introductionCmpt = useRef(null);
  const contactCmpt = useRef(null);
  const achievementCmpt = useRef(null);

  const handleScrollToElement = (element) => {
    element.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      offset: "1000",
    });
  };

  //repeated block of code
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
        background="transparent"
        progress={progress}
        onLoaderFinished={() => {
          setProgress(0);
        }}
      ></LoadingBar>
      <div>
        <HeaderBar handleHeadLinksLoader={handleHeadLinksLoader}></HeaderBar>
      </div>
      <div ref={headerBarCmpt}>
        <CoroselBox></CoroselBox>
      </div>
      <div ref={introductionCmpt}>
        <IntroductoryBox></IntroductoryBox>
      </div>
      <div ref={productCmpt}>
        <ProductContainer></ProductContainer>
      </div>
      <div ref={clientCmpt}>
        <ClientContainer></ClientContainer>
      </div>
      <div ref={achievementCmpt}>
        {" "}
        <AchievementContainer></AchievementContainer>
      </div>
      <div ref={contactCmpt}>
        <ContactContainer></ContactContainer>
      </div>

      <FooterBar></FooterBar>
      <FootNavBar
        headerBarCmpt={headerBarCmpt}
        introductionCmpt={introductionCmpt}
        productCmpt={productCmpt}
        clientCmpt={clientCmpt}
        achievementCmpt={achievementCmpt}
        contactCmpt={contactCmpt}
        handleHeadLinksLoader={handleHeadLinksLoader}
        handleScrollToElement={handleScrollToElement}
      ></FootNavBar>
    </div>
  );
};
export default DashboardPage;
