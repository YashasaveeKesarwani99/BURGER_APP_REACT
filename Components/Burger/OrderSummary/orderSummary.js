import React from "react";

const OrderSummary = (props) => {
  const summaryIngredients = Object.keys(props.ingredients).map((obj) => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{obj}</span>:
        {props.ingredients[obj]}
      </li>
    );
  });

  return (
    <div>
      <h3>Oder Summary Goes Here</h3>
      <ul>{summaryIngredients}</ul>
      <p>Check out more ?</p>
    </div>
  );
};
export default OrderSummary;
