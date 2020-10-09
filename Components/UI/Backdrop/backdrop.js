import React from "react";
import "./backdrop.css";
const Backdrop = (props) => {
  return props.show ? <div className="Backdrop"></div> : null;
};
export default Backdrop;
