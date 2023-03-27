import React, { Component } from "react";
import WithCounter from "./withCounter";
export class HoverCounter extends Component {
  render() {
    const { name, count, incrementCount } = this.props;
    return (
      <div>
        <h3 onMouseOver={incrementCount}>
          {name} Hovered {count} times
        </h3>
      </div>
    );
  }
}

export default WithCounter(HoverCounter, 4);
