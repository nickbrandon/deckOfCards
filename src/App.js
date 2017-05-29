import React, { Component } from 'react';
import CardContainer from './component/CardContainer.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Deck of Cards</h2>
        </div>
        <CardContainer />
      </div>
    );
  }
}

export default App;
