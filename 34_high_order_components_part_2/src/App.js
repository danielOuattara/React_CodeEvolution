
import React, { Component } from 'react'
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import KeyUpCounter from './components/KeyUpCounter';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
        <HoverCounter />
        <KeyUpCounter />
      </div>
    );
  }
}




