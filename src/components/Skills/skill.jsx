import React from "react";
import "./skill.css";
import node from "../../img/node.png";
import javascript from "../../img/javascript.png";
import react from "../../img/react.png";
import express from "../../img/express.png";
import mongodb from "../../img/mongodb.png";
import api from "../../img/api.png";

export default function Skill() {
  return (
    <div className="skill" id="skill" data-aos="zoom-in-up">
      <div className="skillContainer">
        <div className="mid">
          <p className="ara">Skills (I Can Work With)</p>
          <div className="skillsContent">
            <div className="sk" data-aos="flip-right">
              <img src={javascript} alt="" />
              <p className="imgDesc">Javascript</p>
              <span className="skillSpan">90%</span>
              <div className="lineHtml">
                <div className="another"></div>
              </div>
            </div>
            <div className="sk" data-aos="flip-left">
              <img src={node} alt="" />
              <p className="imgDesc">Node.Js</p>
              <span className="skillSpan">60%</span>
              <div className="lineHtml">
                <div className="node"></div>
              </div>
            </div>
            <div className="sk" data-aos="flip-left">
              <img src={react} alt="" />
              <p className="imgDesc">React.Js</p>
              <span className="skillSpan">90%</span>
              <div className="lineHtml">
                <div className="react"></div>
              </div>
            </div>
            <div className="sk" data-aos="flip-right">
              <img src={mongodb} alt="" />
              <p className="imgDesc">MongoDB</p>
              <span className="skillSpan">80%</span>
              <div className="lineHtml">
                <div className="mongo"></div>
              </div>
            </div>
            <div className="sk" data-aos="flip-left">
              <img src={api} alt="" />
              <p className="imgDesc">RestAPI</p>
              <span className="skillSpan">70%</span>
              <div className="lineHtml">
                <div className="api"></div>
              </div>
            </div>
            <div className="sk" data-aos="flip-right">
              <img src={express} alt="" />
              <p className="imgDesc">Express.Js</p>
              <span className="skillSpan">50%</span>
              <div className="lineHtml">
                <div className="express"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
