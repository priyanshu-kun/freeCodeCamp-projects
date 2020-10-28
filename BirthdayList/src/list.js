import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <>
        {this.props.userData.map((user) => {
          const { id, name, age, image } = user;
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </article>
          );
        })}
      </>
    );
  }
}

export default List;
