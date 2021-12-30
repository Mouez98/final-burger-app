import React from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDTIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      cheese: 0,
      bacon: 0,
      salad: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false
  };

  updatePurchaseState = (ingredients)=>{
    const sum = Object.keys(ingredients)
    .map(igKey => ingredients[igKey])
    .reduce((sum, el) => {
       return sum + el;
    }, 0)

    this.setState({purchasable: sum > 0})
  }
  addIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    let updatedCount = oldCount + 1;
    let upadtedIngredients = {
      ...this.state.ingredients,
    };
    upadtedIngredients[type] = updatedCount;
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice + INGREDTIENTS_PRICES[type];

    this.setState({ ingredients: upadtedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(upadtedIngredients)
  };
  removeIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    let updatedCount = oldCount - 1;

    let upadtedIngredients = {
      ...this.state.ingredients,
    };
    upadtedIngredients[type] = updatedCount;
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice - INGREDTIENTS_PRICES[type];

    this.setState({ ingredients: upadtedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(upadtedIngredients)

  };

  render() {

    let disabledInfo = {
      ...this.state.ingredients,
    };

    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <>
        <Modal >
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </>
    );
  }
}

export default BurgerBuilder;
