import React from "react";
import Burger from "../../Components/Burger/burger.js";

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
      }
    };
  }

  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <div>Builder Controls</div>
      </div>
    );
  }
}
export default BurgerBuilder;
