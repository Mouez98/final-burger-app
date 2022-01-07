
import c from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: "Salad" , type: "salad"},
    {label: "Cheese" , type: "cheese"},
    {label: "Meat" , type: "meat"},
    {label: "Bacon" , type: "bacon"},
]

const BuildControls = (props) => (
    <div className={c.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}$</strong> </p>
     {controls.map(ctrl => {
         return <BuildControl 
         label={ctrl.label} 
         key={ctrl.label} 
         added={() => props.add(ctrl.type)}
         removed={() => props.remove(ctrl.type)}
         disabled={props.disabled[ctrl.type]}
         />
     })}
     <button 
     className={c.OrderButton}
     disabled={!props.purchasable}
     onClick={props.purchasing}>
         ORDER NOW
     </button>
    </div>
)

export default BuildControls;

