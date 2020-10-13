import React from "react";
import "./sideDrawer.css";
import NavigationItems from "../NavigationItems/navigationItems";
import Backdrop from "../../UI/Backdrop/backdrop";

const SideDrawer = (props) => {
  var classes = ["SideDrawer", "Close"];
  if (props.boolean) {
    classes = ["SideDrawer", "Open"];
  }

  return (
    <>
      <Backdrop show={props.boolean} clicked={props.clicked} />
      <div className={classes.join(" ")}>
        <button>CLICK</button>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
