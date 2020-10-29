import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="section-center">
        <article className="menu-item">
          <img
            src={this.props.Item.img}
            alt={this.props.Item.title}
            className="photo"
          />
          <div className="item-info">
            <header>
              <h4>{this.props.Item.title}</h4>
              <h4 className="price">${this.props.Item.price}</h4>
            </header>
            <p className="item-text">{this.props.Item.desc}</p>
          </div>
        </article>
      </div>
    );
  }
}

export default Menu;
