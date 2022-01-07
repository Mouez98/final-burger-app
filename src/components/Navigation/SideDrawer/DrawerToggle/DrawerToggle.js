import React from "react";

import classses from "./DrawerToggle.module.css";

const DrawerToggle = (props) => {
return(
    <div onClick={props.clicked} className={classses.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
    </div>
)
}

export default DrawerToggle