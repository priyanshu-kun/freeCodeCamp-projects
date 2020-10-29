import React, { Component } from "react";
import Question from "./Question";
import Data from "./data";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data
    };
  }
  render() {
    return (
      <main className="App">
        <div className="container">
          <h3>Questions and Answers about login!</h3>
          <section className="info">
            {this.state.data.map((dt) => {
              return <Question key={dt.id} questionData={dt} />;
            })}
          </section>
        </div>
      </main>
    );
  }
}

export default App;
