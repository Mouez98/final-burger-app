import React from "react";

import cl from "./Modal.module.css";
import BackDrop from "../BackDrop/BackDrop";

class Modal extends React.Component {
  render() {
    return (
      <>
        <BackDrop clicked={this.props.modalClose} show={this.props.show} />
        <div className={cl.Modal}>{this.props.children}</div>
      </>
    );
  }
}

export default Modal;
