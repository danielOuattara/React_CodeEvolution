
import React, { Component } from 'react';
import './App.css';
import ComponentC from './components/Component_C';
import ComponentB from './components/Component_B';
import { UserProvider } from './components/userContext';
import { PersonProvider } from './components/personContext';

export default class App extends Component {

  render() {
    let person= {
      name: 'daniel ouattara',
      age: 37
    }
    return (
      <div className="App">
        <UserProvider value="Daniel">
            <ComponentC />
            <hr />
          
        </UserProvider>

        <UserProvider value="Julie">
            <ComponentB />
            <hr />
        </UserProvider>

        <PersonProvider value="Gaia" person={person}>
          <ComponentB/>
        </PersonProvider>

      </div>
    );
  }
}




