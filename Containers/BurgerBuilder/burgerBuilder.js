import React from "react";
import Burger from "../../Components/Burger/burger.js";
import BuildControls from "../../Components/Burger/BuildControls/buildControls";

const INGREDIENT_PRICE = {
  salad: 1,
  cheese: 2,
  bacon: 3,
  meat: 4
};

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.addIngredientHandler = this.addIngredientHandler.bind(this);
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
      },
      totalPrice: 10
    };
  }

  addIngredientHandler(type) {
    //updating the amount of ingredients in burger
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    //updating price
    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    //updating states
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  }

  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls add={this.addIngredientHandler} />
      </div>
    );
  }
}
export default BurgerBuilder;
