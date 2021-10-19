import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from "./components/Welcome"

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
      </div>
    );
  }
}

