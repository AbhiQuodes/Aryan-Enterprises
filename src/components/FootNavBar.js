import React, { useRef, useEffect } from "react";
import "./FootNavBar.css";
import { div } from "react-router-dom";
import achievementsLogo from "../images/achievements.svg";
import productsLogo from "../images/productsLogo.svg";
import clientsLogo from "../images/clientsLogo.svg";
import contactLogo from "../images/contactLogo.svg";
import dropDown from "../images/dropDown.png";
import aryanLogo from "../images/aryanLogo.png";
import hambergerIcon from "../images/hambergerIcon.png";
const FootNavBar = ({
  handleScrollToElement,
  headerBarCmpt,
  introductionCmpt,
  productCmpt,
  clientCmpt,
  achievementCmpt,
  contactCmpt,
  handleHeadLinksLoader,
  labelShow,
}) => {
  const dropDownIcon = useRef();
  const navigationBar = useRef();
  const refLabel1 = useRef();
  const refLabel2 = useRef();
  const refLabel3 = useRef();
  const refLabel4 = useRef();
  const refLabel5 = useRef();
  const windowDisplayWidth = window.innerWidth;
  let lastScrollTop = 0;

  const handleScrollHideFootNav = () => {
    let scrollTop = window.pageYoffset || document.documentElement.scrollTop;
    if (windowDisplayWidth <= 600) {
      if (scrollTop < lastScrollTop) {
        navigationBar.current.style.bottom = "0px";
        lastScrollTop = scrollTop;
      } else {
        navigationBar.current.style.bottom = "-75px";
        lastScrollTop = scrollTop;
      }
    }
  };

  const handleSlideLeftClick = () => {
    if (!dropDownIcon.current.classList.contains("rotate180-icon")) {
      dropDownIcon.current.classList.add("rotate180-icon");
      // navigationBar.current.style.display = "flex";
      navigationBar.current.style.left = "0px";

      dropDownIcon.current.classList.add("dark-slide-left-arrow");
    } else {
      dropDownIcon.current.classList.remove("rotate180-icon");
      // navigationBar.current.style.display = "none";
      navigationBar.current.style.left = "-55px";

      dropDownIcon.current.classList.remove("dark-slide-left-arrow");
    }
  };

  const handleLabelShow = () => {
    if (labelShow === "/achievements") {
      refLabel1.current.classList.add("label-show");
      // setTimeout(()=>{ refLabel1.current.classList.remove("label-show");},2000)
    } else if (labelShow === "/products") {
      refLabel2.current.classList.add("label-show");
      // setTimeout(()=>{ refLabel2.current.classList.remove("label-show");},2000)
    } else if (labelShow === "/clients") {
      refLabel3.current.classList.add("label-show");
      // setTimeout(()=>{ refLabel3.current.classList.remove("label-show");},2000)
    } else if (labelShow === "/contact-us") {
      refLabel4.current.classList.add("label-show");
      // setTimeout(()=>{ refLabel4.current.classList.remove("label-show");},2000)
    }
  };
  useEffect(() => {
    handleLabelShow();
    // window.addEventListener("scroll", handleScrollHideFootNav);
    return () => {
      // window.removeEventListener("scroll", handleScrollHideFootNav);
    };
  }, []);

  return (
    <div>
      <img
        className="slide-left-arrow"
        ref={dropDownIcon}
        // src={dropDown}
        src={hambergerIcon}
        alt="dropDown-arrow"
        onClick={() => {
          handleSlideLeftClick();
        }}
      ></img>
      <nav className="foot-nav-container" ref={navigationBar}>
        <div className="foot-nav-box">
          <ul className="foot-nav-list">
            <li className="foot-nav-list-items">
              <div
                className="foot-nav-list-items-link"
                to="/achievements"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  {
                    /*handleheadLinksLoader();*/
                  }
                  handleScrollToElement(achievementCmpt);
                }}
              >
                <img
                  src={achievementsLogo}
                  className="foot-nav-bar-icons"
                  alt="icon-logo"
                ></img>
                <label ref={refLabel1} className="foot-nav-bar-icon-label l1">
                  Achievements
                </label>
              </div>
            </li>
            <li className="foot-nav-list-items">
              <div
                className="foot-nav-list-items-link"
                to="/products"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  {
                    /*handleheadLinksLoader();*/
                  }
                  handleScrollToElement(productCmpt);
                }}
              >
                <img
                  src={productsLogo}
                  className="foot-nav-bar-icons"
                  alt="icon-logo"
                ></img>
                <label ref={refLabel2} className="foot-nav-bar-icon-label l2">
                  Products
                </label>
              </div>
            </li>
            <li className="foot-nav-list-items">
              <div
                className="foot-nav-list-items-link"
                to="/"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  {
                    /*handleheadLinksLoader();*/
                  }
                  handleScrollToElement(headerBarCmpt);
                }}
              >
                <img
                  src={aryanLogo}
                  className="foot-nav-bar-icons aryan-logo"
                  alt="icon-logo"
                ></img>
                <label ref={refLabel5} className="foot-nav-bar-icon-label l2">
                  Top
                </label>
              </div>
            </li>
            <li className="foot-nav-list-items">
              <div
                className="foot-nav-list-items-link l4"
                to="/clients"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  {
                    /*handleheadLinksLoader();*/
                  }
                  handleScrollToElement(clientCmpt);
                }}
              >
                <img
                  src={clientsLogo}
                  className="foot-nav-bar-icons"
                  alt="icon-logo"
                ></img>
                <label ref={refLabel3} className="foot-nav-bar-icon-label l3">
                  Clients
                </label>
              </div>
            </li>
            <li className="foot-nav-list-items">
              <div
                className="foot-nav-list-items-link"
                to="/contact-us"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  {
                    /*handleheadLinksLoader();*/
                  }
                  handleScrollToElement(contactCmpt);
                }}
              >
                <img
                  src={contactLogo}
                  className="foot-nav-bar-icons"
                  alt="icon-logo"
                ></img>
                <label ref={refLabel4} className="foot-nav-bar-icon-label l4">
                  <pre>Contact us</pre>{" "}
                </label>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default FootNavBar;
