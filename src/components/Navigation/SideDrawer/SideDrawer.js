import React from "react";

import Logo from "../Logo/Logo";
import classes from "./SideDrawer.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from '../../UI/BackDrop/BackDrop';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.open) {
    attachedClasses = [classes.SideDrawer, classes.open];
  }
  return (
    <>
    <BackDrop show={props.open} clicked={props.closed} />
    <div className={attachedClasses.join(' ')}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </>
  );
};

export default sideDrawer;
