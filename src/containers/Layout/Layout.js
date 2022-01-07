import React, { useState } from "react";

import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
 const [showSideDrawer, setShowSideDrawer] = useState(false)

  const closedSideDrawerHandler = ()=>{
    setShowSideDrawer(false)
  } 
  const openSideDrawerHandler = ()=>{
    setShowSideDrawer((showSideDrawer) => {
      return !showSideDrawer;
    })
  } 

  return (
    <>
      <SideDrawer open={showSideDrawer} closed={closedSideDrawerHandler}/>
      <Toolbar open={openSideDrawerHandler}/>
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};
export default Layout;
