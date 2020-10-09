import React from "react";
import "./modal.css";
const Modal = (props) => {
  return (
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "trandslateY(-100vh)",
        opacity: props ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  );
};

export default Modal;
