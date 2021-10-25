
import React, { Component } from 'react'
import './App.css';
// import ClickCounterTwo from './components/ClickCounter_2';
// import HoverCounterTwo from './components/HoverCounter_2';
import User from './components/User';
import Counter from './components/Counter';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ClickCounterTwo />
        <HoverCounterTwo /> */}
        <User 
          name1='Daniel'
          name2={() =>'Daniel' } 
          name3={(isLoggedIn) => isLoggedIn ? 'Daniel' : 'Guest' } 
          render={(isLoggedIn) => isLoggedIn ? 'Daniel' : 'Guest' } 
        />
        <Counter render={"render"} />
      </div>
    );
  }
}




