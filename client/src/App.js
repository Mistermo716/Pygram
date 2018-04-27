import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './navbar';
import Photocards from './photocards';
import PhotoForm from './photoform';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/" component={Navbar} />
          <Route path="/" component={Photocards} />
          <Route path="/photosubmit" component={PhotoForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
