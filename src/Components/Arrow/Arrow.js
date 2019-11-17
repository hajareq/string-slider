import React, { Component } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PropTypes from "prop-types";

export default class Arrow extends Component {
  render() {
    return (
      <div
        className={`arrow ${this.props.arrowDirection}`}
        onClick={this.props.onArrowClick}
      >
        {this.props.arrowDirection === "rightArrow" ? (
          <ArrowForwardIosIcon />
        ) : (
          <ArrowBackIosIcon
            style={{
              marginLeft: "8px"
            }}
          />
        )}
      </div>
    );
  }
}

Arrow.propTypes = {
  arrowDirection: PropTypes.oneOf(["rightArrow", "leftArrow"]),
  onArrowClick: PropTypes.func
};
