import React, { Component } from "react";
import Data from "./Data";
import Menu from "./Menu";
import Categories from "./Categories";
import "./styles.css";

const allCategories = ["all", ...new Set(Data.map((item) => item.category))];
console.log(allCategories);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: Data,
      filter: allCategories
    };
  }

  filter = (cate) => {
    console.log(cate);
    if (cate === "all") {
      this.setState({
        menu: Data
      });
      return;
    }
    const newData = Data.filter((dt) => {
      return dt.category === cate;
    });
    this.setState({
      menu: newData
    });
  };

  render() {
    return (
      <main className="App">
        <section className="menu section">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </section>
        <Categories
          category={this.state.filter}
          categoriesfilter={this.filter}
        />
        {this.state.menu.map((item) => {
          return <Menu key={item.id} Item={{ ...item }} />;
        })}
      </main>
    );
  }
}

export default App;
