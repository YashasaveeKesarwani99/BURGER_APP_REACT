import React from "react";
import "./layout.css";
const layout = (props) => {
  return (
    <div>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className="content">{props.children}</main>
    </div>
  );
};
export default layout;
