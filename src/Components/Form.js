import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <input type="text" />
      </form>
    </div>
  );
}

export default Form;
