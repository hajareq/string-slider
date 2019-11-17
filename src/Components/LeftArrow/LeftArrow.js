import React, { Component } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default class LeftArrow extends Component {
  render() {
    return (
      <div className="leftArrow arrow" onClick={this.props.onArrowClick}>
        <ArrowBackIosIcon
          style={{
            marginLeft: "8px"
          }}
        />
      </div>
    );
  }
}
