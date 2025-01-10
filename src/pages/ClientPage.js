import React, { useState, useEffect } from "react";
import "./ClientPage.css";
import HeaderBar from "../components/HeaderBar";
import FootNavBar from "../components/FootNavBar";
import LoadingBar from "react-top-loading-bar";
import { useLocation } from "react-router-dom";
import FooterBar from "../components/FooterBar";
import ClientContainer from "../components/ClientContainer";

const ClientPage = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
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
    // window.scrollTo(0, 0);
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
        {" "}
        <ClientContainer></ClientContainer>
      </div>
      <FooterBar></FooterBar>
    </div>
  );
};
export default ClientPage;
