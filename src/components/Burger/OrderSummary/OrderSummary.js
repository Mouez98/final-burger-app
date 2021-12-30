import React from 'react';


const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
        return (
      <li key={igKey}>
          <span 
          style={{textTransform: "capitalize"}}>
            {igKey}:
          </span> 
            {props.ingredients[igKey]}
      </li>)
    })
  return (
  <>
    <h3>Your Order</h3>
    <p>An unhealthy burger with the following ingredients:</p>
    <ul>
     {ingredientsSummary}
    </ul>
  </> 
    )
}
  


export default orderSummary;