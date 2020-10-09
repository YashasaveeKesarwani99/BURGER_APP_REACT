import React from "react";
import Burger from "../../Components/Burger/burger.js";
import BuildControls from "../../Components/Burger/BuildControls/buildControls";
import Modal from "../../Components/UI/Modal/modal";
import OrderSummary from "../../Components/Burger/OrderSummary/orderSummary";

const INGREDIENT_PRICE = {
  salad: 1,
  cheese: 2,
  bacon: 3,
  meat: 4
};

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.updatePurchasing = this.updatePurchasing.bind(this);
    this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
    this.addIngredientHandler = this.addIngredientHandler.bind(this);
    this.updatePurchasable = this.updatePurchasable.bind(this);
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
      },
      totalPrice: 10,
      purchasable: false,
      purchasing: false
    };
  }
  // Updating the state of purchase
  updatePurchasable(ingredients) {
    const sum = Object.keys(ingredients)
      .map((obj) => {
        return ingredients[obj];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({
      purchasable: sum > 0
    });
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
    this.updatePurchasable(updatedIngredients);
  }

  removeIngredientHandler(type) {
    //updating the amount of ingredients in burger
    const oldCount = this.state.ingredients[type];
    if (oldCount === 0) return;
    else {
      const updatedCount = oldCount - 1;
      const updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = updatedCount;

      //updating price
      const updatedPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
      //updating states
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: updatedPrice
      });
      //updating purchasable
      this.updatePurchasable(updatedIngredients);
    }
  }

  updatePurchasing() {
    this.setState({ purchasing: true });
  }

  render() {
    //condtional rendering of "LESS" button
    var disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <div>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchasing={this.updatePurchasing}
        />
      </div>
    );
  }
}
export default BurgerBuilder;
