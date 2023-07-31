import React from "react";
import "./ContactContent.css";
import { FaGithub, FaMailBulk, FaPhone } from "react-icons/fa";

function ContactContent() {
  return (
    <div className="contact">
      <div className="phone">
        <h4>
          <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
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
          <FaGithub size={20} style={{ color: "white", marginRight: "2rem" }} />
          <a href="https://github.com/yeabtsega45">yeabtsega45</a>
        </h4>
      </div>
    </div>
  );
}

export default ContactContent;
