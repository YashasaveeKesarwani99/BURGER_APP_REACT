import React from "react";
import "./modal.css";
import Backdrop from "../Backdrop/backdrop";
const Modal = (props) => {
  return (
    <div>
      <Backdrop show={props.show} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "trandslateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
