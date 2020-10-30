import React, { Component } from "react";
import SingleColor from "./singleColor";
import Form from "./Form";
import Values from "values.js";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      error: false,
      // add default value
      list: [...new Values("#00ff9d").all(10)]
    };
    this.getChange = this.getChange.bind(this);
  }

  getChange(color) {
    try {
      this.setState({
        error: false
      });

      // get all shades with values library
      let colors = new Values(color).all(10);

      // set colors array to the list
      this.setState({
        list: colors
      });
    } catch (e) {
      this.setState({
        error: true
      });
      console.log(e);
    }
  }
  render() {
    return (
      <>
        <section className="container">
          <h3>Generate Color</h3>
          {/* setup form */}
          <Form error={this.state.error} getChange={this.getChange} />
        </section>
        <section className="colors grid-color">
          {/* show color component */}
          {this.state.list.map((color, cIndex) => {
            return (
              <SingleColor key={cIndex} colorsProps={color} index={cIndex} />
            );
          })}
        </section>
      </>
    );
  }
}

export default App;
