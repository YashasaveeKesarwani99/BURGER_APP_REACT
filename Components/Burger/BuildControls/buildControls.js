import React from "react";
import "./buildControls.css";
import BuildControl from "./BuildControl/buildControl";
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
        return (
          <BuildControl
            label={obj.label}
            key={obj.label}
            adder={() => props.add(obj.type)}
          />
        );
      })}
    </div>
  );
};

export default buildControls;
