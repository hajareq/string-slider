import React, { Component } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default class RightArrow extends Component {
  render() {
    return (
      <div className="rightArrow arrow" onClick={this.props.onArrowClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  }
}
