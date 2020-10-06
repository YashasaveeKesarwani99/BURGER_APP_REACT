import React from "react";
import "./buildControls.css";
import buildControl from "./BuildControl/buildControl";
const controls = [
  {
    label: "Salad",
    type: "salad"
  },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const buildControls = (props) => {
  return (
    <div className="BuildControls">
      {controls.map((obj) => {
        return <buildControl Label={obj.label} />;
      })}
    </div>
  );
};

export default buildControls;
