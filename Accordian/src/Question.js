import React, { Component, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <section className="question">
        <header>
          <h4>{this.props.questionData.title}</h4>
          <button onClick={this.handleClick} className="btn">
            {!this.state.isOpen ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </button>
        </header>
        <p>{this.state.isOpen && this.props.questionData.info}</p>
      </section>
    );
  }
}

export default Question;
