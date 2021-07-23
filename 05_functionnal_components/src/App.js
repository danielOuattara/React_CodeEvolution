import React from 'react'
import './App.css';
// import Greet from './components/Greet';
import { Greet } from './components/Greet';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Greet />
      </div>
    );
  }
}

export default App;
