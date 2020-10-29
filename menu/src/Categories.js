import React, { Component } from "react";

class Categories extends Component {
  render() {
    return (
      <section className="btn-container">
        {this.props.category.map((cate, index) => {
          return (
            <button
              key={index}
              className="filter-btn"
              onClick={(e) => {
                this.props.categoriesfilter(e.target.value);
              }}
              value={cate}
            >
              {cate}
            </button>
          );
        })}
      </section>
    );
  }
}

export default Categories;
