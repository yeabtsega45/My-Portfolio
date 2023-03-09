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
              0912704375
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              yabtsega2022@gmail.com
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
            <FaTelegram
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
