import React from "react";
import "../CSS/button.css";

const Button = ({ Btntext }) => {
  return <button>{Btntext?.NavText}</button>;
};

export default Button;
