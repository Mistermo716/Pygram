import React, { Component } from 'react';
import Navbar from './navbar';
import Photocards from './photocards';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Photocards />
      </div>
    );
  }
}

export default App;
