import React, { Component } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./styles.css";
const url = "https://course-api.com/react-tours-project";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tours: []
    };
  }

  removeTour = (id) => {
    const newArray = this.state.tours.filter((tour) => {
      return tour.id !== id;
    });
    this.setState({
      tours: newArray
    });
  };

  fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        loading: false,
        tours: data
      });
      console.log("data: ", this.state.tours);
    } catch (e) {
      this.setState({
        loading: false
      });
      console.log(e);
    }
  };

  render() {
    if (this.state.loading) {
      this.fetchData();
      return (
        <main>
          <Loading />
        </main>
      );
    }
    if (this.state.tours.length === 0) {
      return (
        <main>
          <div className="title">
            <h2>No tours left</h2>
            <button
              className="btn"
              onClick={() => {
                this.fetchData();
              }}
            >
              Refresh
            </button>
          </div>
        </main>
      );
    }
    return (
      <main className="App">
        <Tours functionRemove={this.removeTour} data={this.state.tours} />
      </main>
    );
  }
}

export default App;
