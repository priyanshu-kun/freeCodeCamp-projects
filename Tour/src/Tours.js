import React, { Component } from "react";
import Tour from "./Tour";
class Tours extends Component {
  render() {
    return (
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {this.props.data.map((dt) => {
            return (
              <Tour
                key={dt.id}
                newData={dt}
                functionRemoveTour={this.props.functionRemove}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Tours;
