
import React, { Component } from 'react'
import './App.css';
import ComponentC from './components/Component_C';
import { UserProvider } from './components/userContext';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="Daniel">
            <ComponentC />
        </UserProvider>
      </div>
    );
  }
}




