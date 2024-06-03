import "./Footer.css";
import React from "react";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
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
          <div className="github">
            <h4>
              <FaGithub
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <a href="https://github.com/yeabtsega45">yeabtsega45</a>
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
            <a href="https://github.com/yeabtsega45">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/yeabtsega-yeshidnber-7a9618257/">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.t.me/Yabtsega_yg">
              <FaTelegram size={30} />
            </a>
            <a href="https://www.instagram.com/yaba_kb/">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
