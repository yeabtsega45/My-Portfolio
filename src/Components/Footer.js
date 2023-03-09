import "./Footer.css";
import React from "react";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

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
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Footer;
