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
      {props.price > 10 ? <p> Price : {props.price}</p> : null}
      {controls.map((obj) => {
        return (
          <BuildControl
            label={obj.label}
            key={obj.label}
            adder={() => props.add(obj.type)}
            remover={() => props.remove(obj.type)}
            disabled={props.disabled[obj.type]}
            purchasable={props.purchasable}
          />
        );
      })}
      {props.purchasable ? (
        <button className="OrderButton">Order Now</button>
      ) : null}
    </div>
  );
};

export default buildControls;
