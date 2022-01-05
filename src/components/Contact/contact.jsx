import React from "react";
import "./contact.css";
import right from "../../img/portfolio-4.jpg";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contactContainer">
        <div className="contactDesc">
          <h3 className="hThree">Heyyy,</h3>
          <p className="contactPara">
            I am available for work. Connect with me via phone: +8436 14 245 or
            email <b>kj9646331@gmail.com</b>
          </p>
          <div className="contactInputContainer">
            <form>
              <input
                type="text"
                placeholder="Your name"
                className="contactInput"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="contactInput"
              />
              <input
                type="text"
                placeholder="Write a Subject"
                className="contactInput"
              />
              <input
                type="text"
                placeholder="Write Your message"
                className="contactBigInput"
              />
              <button className="contactButton">SUBMIT</button>
            </form>
          </div>
        </div>
        <div className="contactRightContainer">
          <img src={right} className="rightImg" alt="" />
        </div>
      </div>
    </div>
  );
}
