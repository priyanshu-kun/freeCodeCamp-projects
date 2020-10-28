import React, { Component } from "react";
import data from "./data";
import List from "./list";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: data
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      userData: []
    });
  }

  render() {
    return (
      <main>
        <section className="container">
          <h3>{this.state.userData.length} Birthdays today!</h3>
          <List userData={this.state.userData} />
          <button onClick={this.handleClick}>Remove All</button>
        </section>
      </main>
    );
  }
}

export default App;
