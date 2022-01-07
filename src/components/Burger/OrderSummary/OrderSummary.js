import React from "react";

import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
 
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}:</span>
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    
    if(this.props.purchased && this.props.purchasing && this.props.ingredients){
     return (
       <>
      <h2>Enjoy your Burger </h2>
      </>
     ) 
    } else {
      return (
       <>
      <h3>Your Order</h3>
       <p>An unhealthy burger with the following ingredients:</p>
       <ul>
         {ingredientsSummary}
         <p>
           <strong>Total price: {this.props.price.toFixed(2)}</strong>
         </p>
       </ul>
       <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
         CANCEL{" "}
       </Button>
       <Button btnType="Success" clicked={this.props.purchaseContinued}>
         CONTINUE{" "}
       </Button>
     </>
      )    
    }
  }
}

export default OrderSummary;
