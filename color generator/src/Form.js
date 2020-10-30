import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getChange(this.state.value);
    this.setState({
      value: ""
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    console.log(this.props.error);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          id="color-input"
          placeholder="#ff9900"
          value={this.state.value}
          className={`${this.props.error ? "error" : null}`}
        />
        <button className="btn">Submit</button>
      </form>
    );
  }
}
export default Form;
