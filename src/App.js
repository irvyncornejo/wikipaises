import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Busqueda from './Busqueda.js';
import { BrowserRouter, Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Paises</h1>
        <Busqueda/>
      </div>
    );
  }
}

export default App;
