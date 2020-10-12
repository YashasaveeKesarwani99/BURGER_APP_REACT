import React from "react";
import "./navigationItem.css";
const NavigationItem = (props) => {
  const classes = `${props.active ? "active" : null}`;
  return (
    <li className="NavigationItem">
      <a href={props.link} className={classes}>
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
