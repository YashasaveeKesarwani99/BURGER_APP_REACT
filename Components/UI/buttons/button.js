import React from "react";
import "./button.css";

const Button = (props) => {
  const classes = `${props.type} "Button"`;
  return (
    <button className={classes} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default Button;
