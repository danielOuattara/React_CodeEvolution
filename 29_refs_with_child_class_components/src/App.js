import React, { Component } from "react";
import "./App.css";
import FocusInput from "./components/FocusInput";

/* 
- previously  we added a ref to a HTML element
- now we will add ref to a child Component.
- note however that the child component must be a class component

*/

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FocusInput />
      </div>
    );
  }
}
