
import React, { Component } from 'react'
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import Items from "./components/Items";
import Items2 from "./components/Items";



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FragmentDemo/> 
        <hr />      
        <Table/>
        <hr />
        <Items/>
        <hr/>
        <Items2/>
      </div>
    )
  }
}




