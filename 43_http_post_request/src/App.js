
import React, { Component } from 'react'
import './App.css';
import PostFom from './components/PostFom';
// import PostList from './components/PostList';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <PostList/> */}
        <PostFom />
      </div>
    );
  }
}




