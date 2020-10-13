import React from "react";
import NavigationItems from "../NavigationItems/navigationItems";
import "./toolbar.css";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <div onClick={props.clicked}>MENU</div>
      <div>LOGO</div>
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
