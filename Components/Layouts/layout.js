import React from "react";
import "./layout.css";
import "../Navigation/Toolbar/toolbar";
import Toolbar from "../Navigation/Toolbar/toolbar";
const layout = (props) => {
  return (
    <div>
      <Toolbar />
      <div>SideDrawer, Backdrop</div>
      <main className="content">{props.children}</main>
    </div>
  );
};
export default layout;
