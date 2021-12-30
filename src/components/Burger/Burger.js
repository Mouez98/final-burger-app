import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const Burger = ({ingredients}) => {
     let transformedIngredient = Object.keys( ingredients ).map((igKey) =>{
         return [...Array(ingredients[igKey])].map((_, i) => {
         return <BurgerIngredient key={igKey + i} type={igKey} />
     })})
     .reduce((arr, el) => {
         return arr.concat(el);
     });
     if(transformedIngredient.length === 0){
         transformedIngredient = <p>Please add ingredients!</p>
     }
     return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;