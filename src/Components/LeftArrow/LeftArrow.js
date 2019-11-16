import React, { Component } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default class LeftArrow extends Component {
  render() {
    return (
      <div className="backArrow arrow" onClick={this.props.onArrowClick}>
        <ArrowBackIosIcon />
      </div>
    );
  }
}
