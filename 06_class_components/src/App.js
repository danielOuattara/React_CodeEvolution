import React from 'react';
import './App.css';
import Greet from './components/Greet';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Greet />
      </div>
    );
  }
}

