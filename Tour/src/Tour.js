import React, { Component } from "react";

class Tour extends Component {
  static defaultProps = {
    textLimit: 200
  };
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.functionRemoveTour(this.props.newData.id);
  }

  render() {
    return (
      <article className="single-tour">
        <img src={this.props.newData.image} alt={this.props.newData.name} />
        <footer>
          <div className="tour-info">
            <h4> {this.props.newData.name} </h4>
            <h4 className="tour-price"> ${this.props.newData.price} </h4>
          </div>
          <p>
            {this.state.isOpen
              ? this.props.newData.info
              : `${this.props.newData.info.substring(
                  0,
                  this.props.textLimit
                )}...`}
            <button
              onClick={() => {
                this.setState({
                  isOpen: !this.state.isOpen
                });
              }}

              /*
              my way to toggle button
              (st) => {
                  return {
                    isOpen: !st.isOpen ? true : false
                  };
                } */
            >
              {!this.state.isOpen ? "Read More." : "Show Less."}
            </button>
          </p>
          <button onClick={this.handleClick} className="delete-btn">
            Not Interested
          </button>
        </footer>
      </article>
    );
  }
}

export default Tour;
