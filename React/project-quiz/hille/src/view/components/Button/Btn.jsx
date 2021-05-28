import './btn.css';
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Button({ ButtonName, action }) {
  return (
    <Link to={action}>
      <button className="btn">{ButtonName}</button>
    </Link>
  );
}

export default Button;
