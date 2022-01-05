import React, { useState } from "react";
import "./Home.css";
import logo from "../img/logo.png";

export default function Home() {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  const [toggle, setToggle] = useState(false);
  return (
    <div className="home" id="home">
      <div className="home_bg">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation ">
            <ul className="unOrder">
              <a href="#home">
                <li className="orderList">Home</li>
              </a>
              <a href="#about">
                <li className="orderList">About</li>
              </a>
              <a href="#skill">
                <li className="orderList">Skills</li>
              </a>
              <a href="#projects">
                <li className="orderList">Projects</li>
              </a>
              <a href="#contact">
                <li className="orderList">Contact</li>
              </a>
            </ul>
          </div>
          <div className="toggle">
            <svg
              onClick={() => setToggle(!toggle)}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            {toggle ? (
              <div className="sidebarNavigation ">
                <ul className="SidebarUnOrder">
                  <a href="#home">
                    <li className="SidebarOrderList">Home</li>
                  </a>
                  <a href="#about">
                    <li className="SidebarOrderList">About</li>
                  </a>
                  <a href="#skill">
                    <li className="SidebarOrderList">Skills</li>
                  </a>
                  <a href="#projects">
                    <li className="SidebarOrderList">Projects</li>
                  </a>
                  <a href="#contact">
                    <li className="SidebarOrderList">Contact</li>
                  </a>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        <div className="homeContainer">
          <h3 className="hi">Welcome To My World </h3>
          <h2 className="desc1">Hi, I'm Keshav</h2>
          <h2 className="desc2">Full Stack Developer</h2>
        </div>
      </div>
    </div>
  );
}
