import cl from "./BuildControl.module.css";

const BuildControl = (props) => (
  <div className={cl.BuildControl}>
    <div className={cl.Label}>{props.label}</div>
    <button 
        className={cl.Less} 
        onClick={props.removed}
        disabled={props.disabled}>
      Less
    </button>
    <button 
        className={cl.More} 
        onClick={props.added}>
      More
    </button>
  </div>
);

export default BuildControl;
