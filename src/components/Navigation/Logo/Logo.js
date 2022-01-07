import React from "react";

import BurgerLogo from "../../../assests/images/burger-logo.png";
import classes from "./Logo.module.css";

const Logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img  src={BurgerLogo} alt="BurgerLogo" />
  </div>
);

export default Logo;
