import React from "react";
import "./navigationItems.css";
import NavigationItem from "../NavigationItem/navigationItem";
const NavigationItems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" active={true}>
        Burger Builder
      </NavigationItem>
      <NavigationItem>Check Out</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
