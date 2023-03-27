import React, { PureComponent } from "react"; // rpce

/* 
- pure component by preventing re-rendering allows
  performance boots on certain scenarios 

- the best way to mutate the state of a pure component
  is to return a new state after operation 

*/

export default class PureComp extends PureComponent {
  render() {
    console.log(" Pure Component Render ");
    return <div>Pure Component : {this.props.name}</div>;
  }
}
