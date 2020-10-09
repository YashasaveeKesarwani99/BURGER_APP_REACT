import React from "react";
import "./backdrop.css";
const Backdrop = (props) => {
  props.show ? <div className="Backdrop"></div> : null;
};
