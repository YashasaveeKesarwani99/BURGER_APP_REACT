import React from "react";
import "./burger.css";
import BurgerIngredients from "./Burger_Ingredients/burgerIngredients";

const burger = (props) => {
  //making an array of keys a
  let transformedIgredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredients key={igKey + i} type={igKey} />;
      });
    })
    //Adding reduce method to populate the empty array
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  // an array of keys were made in the above code to map through the igredients passed by the user

  //if no ingredients are added
  if (transformedIgredients.length === 0) {
    transformedIgredients = <p> please add some BurgerIngredients </p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {transformedIgredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
