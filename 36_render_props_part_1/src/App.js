import React, { Component } from "react";
import "./App.css";
import ClickCounterTwo from "./components/ClickCounter_2";
import HoverCounterTwo from "./components/HoverCounter_2";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounterTwo />
        <HoverCounterTwo />
      </div>
    );
  }
}
