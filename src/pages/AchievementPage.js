import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ClientPage.css";
import HeaderBar from "../components/HeaderBar";
import FootNavBar from "../components/FootNavBar";
import LoadingBar from "react-top-loading-bar";
import FooterBar from "../components/FooterBar";
import AchievementContainer from "../components/AchievementContainer";

const AchievementPage = () => {
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
    <div className="container"><AchievementContainer></AchievementContainer></div>
      <FooterBar></FooterBar>
   
    </div>
  );
};
export default AchievementPage;
