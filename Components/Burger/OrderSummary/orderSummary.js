import React from "react";
import Button from "../../UI/buttons/button";

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
      <Button clicked={props.cancelPurchasing} type="Danger">
        CANCEL
      </Button>
      <Button clicked={props.continuePurchasing} type="Success">
        CONTINUE
      </Button>
    </div>
  );
};
export default OrderSummary;
