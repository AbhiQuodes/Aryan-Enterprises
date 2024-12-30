import React, { useEffect } from "react";
// import {useParams,useNavigate,NavLink} from 'react-router-dom'
import dropDown from "../images/dropDown.png";
import "./HeaderBar.css";
import { NavLink, useLocation } from "react-router-dom";
import { useRef } from "react";

const HeaderBar = ({ handleHeadLinksLoader }) => {
  const dropDownIcon = useRef();
  const headBoxList = useRef();
  const refHeadList1 = useRef();
  const refHeadList2 = useRef();
  const refHeadList3 = useRef();
  const refHeadList4 = useRef();
  const location = useLocation();
  const refHeadContainer = useRef();
  let lastScrollTop = 0;
  const handleScrollHideHead = () => {
    let scrollTop = window.pageYoffset || document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop) {
      refHeadContainer.current.style.top = "0px";
      lastScrollTop = scrollTop;
    } else {
      refHeadContainer.current.style.top = "-75px";
      lastScrollTop = scrollTop;
    }
  };

  const handleHeadListScale = () => {
    if (location.pathname === "/achievements") {
      refHeadList1.current.classList.add("item-scale");
      // setTimeout(()=>{ refHeadList1.current.classList.remove("item-scale");},2000)
    } else if (location.pathname === "/products") {
      refHeadList2.current.classList.add("item-scale");
      // setTimeout(()=>{ refHeadList2.current.classList.remove("item-scale");},2000)
    } else if (location.pathname === "/clients") {
      refHeadList3.current.classList.add("item-scale");
      // setTimeout(()=>{ refHeadList3.current.classList.remove("item-scale");},2000)
    } else if (location.pathname === "/contact-us") {
      refHeadList4.current.classList.add("item-scale");
      // setTimeout(()=>{ refHeadList4.current.classList.remove("item-scale");},2000)
    }
  };
  useEffect(() => {
    handleHeadListScale();
    window.addEventListener("scroll", handleScrollHideHead);
    return () => {
      window.removeEventListener("scroll", handleScrollHideHead);
    };
  }, []);

  const handleDropDownClick = () => {
    if (!dropDownIcon.current.classList.contains("rotate-icon")) {
      dropDownIcon.current.classList.add("rotate-icon");
      headBoxList.current.style.display = "flex";
    } else {
      dropDownIcon.current.classList.remove("rotate-icon");
      headBoxList.current.style.display = "none";
    }
  };

  return (
    <header className="head-container" ref={refHeadContainer}>
      <div className="head-box">
        <h2 className="head-title">
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "#fff" }}
            onClick={() => {
              handleHeadLinksLoader();
            }}
          >
            {" "}
            Aryan Enterprises{" "}
          </NavLink>
        </h2>
        <ul ref={headBoxList} className="head-list">
          <NavLink
            ref={refHeadList1}
            className="head-list-link-item"
            style={{ textDecoration: "none" }}
            to="/achievements"
            onClick={() => {
              handleHeadLinksLoader();
            }}
          >
            {" "}
            <li>Achievements</li>{" "}
          </NavLink>
          <NavLink
            ref={refHeadList2}
            className="head-list-link-item"
            style={{ textDecoration: "none" }}
            to="/products"
            onClick={() => {
              handleHeadLinksLoader();
            }}
          >
            <li>Products</li>
          </NavLink>
          <NavLink
            ref={refHeadList3}
            className="head-list-link-item"
            style={{ textDecoration: "none" }}
            to="/clients"
            onClick={() => {
              handleHeadLinksLoader();
            }}
          >
            <li>Clients</li>
          </NavLink>
          <NavLink
            ref={refHeadList4}
            className="head-list-link-item"
            style={{ textDecoration: "none" }}
            to="/contact-us"
            onClick={() => {
              handleHeadLinksLoader();
            }}
          >
            {" "}
            <li>Contact us</li>
          </NavLink>
        </ul>
        <img
          ref={dropDownIcon}
          src={dropDown}
          alt="dropDown-arrow"
          onClick={() => {
            handleDropDownClick();
          }}
          className="head-box-list-arrow"
        ></img>
      </div>
    </header>
  );
};

export default HeaderBar;
