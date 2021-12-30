import React from "react";

import cl from './Modal.module.css';

const modal = (props) => (
    <div className={cl.Modal}>
        {props.children}
    </div>
)


export default modal;