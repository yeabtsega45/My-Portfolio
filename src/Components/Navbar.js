import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
    </div>
  );
}

export default Navbar;
