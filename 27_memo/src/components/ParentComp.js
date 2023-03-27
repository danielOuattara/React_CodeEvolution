import React, { Component } from "react";
// import RegularFunctionComp from './RegularFunctionComp';
import MemoComp from "./MemoComp";

export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Daniel",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Daniel" });
    }, 2000);
  }

  render() {
    console.log(" ----- Parent Component Render ------");
    return (
      <div>
        Parent Component Regular
        {/* <RegularFunctionComp name={this.state.name}  /> */}
        <hr />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}
