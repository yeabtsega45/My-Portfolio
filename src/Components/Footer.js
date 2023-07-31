import "./Footer.css";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Addis Ababa.</p>
              <p>Ethiopia.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <a href="tel:+251912704375">+251912704375</a>
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <a href="mailto:yabtsega2022@gmail.com">yabtsega2022@gmail.com</a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            This is me Yeabtsega Yeshidnber. I enjoy discussing new projects and
            design challenges.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <a href="t.me/Yabtsega_man">
            <FaTelegram
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            /></a>
            <a href="https://www.instagram.com/yaba_kb/">
            <FaInstagram
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
