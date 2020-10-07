import React from "react";
import "./buildControl.css";
const buildControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button className="Less" onClick={props.remover}>
        Less
      </button>
      <button className="More" onClick={props.adder}>
        More
      </button>
    </div>
  );
};
export default buildControl;
