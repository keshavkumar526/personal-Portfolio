import React from "react";
import "./about.css";
import img from "./img.jpg"
import profilePic from "../../img/profilePic.jpg"

export default function About() {
  return (
    <div className="about" id="about" data-aos="zoom-in-down">
      <div className="aboutContainer">
        <div className="aboutImg">
          <img className="pfm" src={profilePic} alt="" />
        </div>
        <div className="aboutContent">
          <h1 className="parra">About Me</h1>
          <div className="aboutDesc">
            <p className="paara">
              The HTML element represents a paragraph. Paragraphs are usually
              represented in visual media as blocks of text separated from
              adjacent blocks by blank lines and/or first-line indentation, but
              HTML paragraphs can be any structural grouping of related content,
              such as images or form fields
            </p>
            <div className="aboutButton">
                <button>Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
