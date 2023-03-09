import "./Footer.css";
import React from "react";
import { FaHome } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society.</p>
              <p>Bangladesh.</p>
            </div>
          </div>
          <div className="phone"></div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Footer;
