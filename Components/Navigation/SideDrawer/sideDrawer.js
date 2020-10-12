import React from "react";
import "./sideDrawer.css";
import NavigationItems from "../NavigationItems/navigationItems";
const SideDrawer = () => {
  return (
    <div className="SideDrawer">
    <button>CLICK</button>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
