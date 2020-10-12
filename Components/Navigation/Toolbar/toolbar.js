import React from "react";
import NavigationItems from "../NavigationItems/navigationItems";
import "./toolbar.css";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <div>MENU</div>
      <div>LOGO</div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
