import React, { Component } from "react";
import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";

export default class Slider extends Component {
  state = {
    strings: this.props.strings,
    currentIndex: 0,
    translation: 0
  };

  slideLeft = () => {
    if (this.state.currentIndex === 0) return;
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translation: prevState.translation + this.slideWidth()
    }));
  };

  slideRight = () => {
    if (this.state.currentIndex === this.state.strings.length - 1) {
      return this.setState({
        currentIndex: 0,
        translation: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translation: prevState.translation + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translation}px)`,
            transition: "transform ease-out 0.5s"
          }}
        >
          {this.state.strings.map((string, index) => (
            <span className="slide" key={index}>
              {string}
            </span>
          ))}
        </div>

        <LeftArrow onArrowClick={this.slideLeft} />
        <RightArrow onArrowClick={this.slideRight} />
      </div>
    );
  }
}
Slider.defaultProps = {
  strings: [
    "Bonjour Hajar,",
    "J’espère te voir réussir cet exercice !",
    "A très bientôt"
  ]
};
