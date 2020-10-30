import React, { Component } from "react";
import rgbToHex from "./utils";

class SingleColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false
    };
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy(rgb) {
    this.setState({
      alert: true
    });

    // set copy code
    navigator.clipboard.writeText(rgbToHex(...rgb));
    setTimeout(() => {
      this.setState({
        alert: false
      });
    }, 3000);
  }

  render() {
    const { rgb, weight } = this.props.colorsProps;
    const index = this.props.index;
    const bcg = rgb.join(",");
    return (
      <article
        // click copy functionallity
        onClick={this.handleCopy.bind(this, rgb)}
        className={`color ${index > 10 && "color-light"}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
      >
        <p className="percent-value">{weight}%</p>
        <p className="color-value" style={{ fontWeight: "bold" }}>
          {rgbToHex(...rgb)}
        </p>

        {/* show copy clipboard text */}
        {this.state.alert && <p className="alert">copied to clipboard</p>}
      </article>
    );
  }
}

export default SingleColor;
