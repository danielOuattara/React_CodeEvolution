
import React, { Component } from 'react'
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary> 
          <Hero heroname="Batman" />
        </ErrorBoundary>

        <ErrorBoundary> 
          <Hero heroname="Superman" />
        </ErrorBoundary>
        
        <ErrorBoundary> 
          <Hero heroname="Joker" />
        </ErrorBoundary>
      </div>
    );
  }
}




