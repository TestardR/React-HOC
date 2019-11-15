import React, { Component } from 'react';
import './App.css';
import './components/ButtonOne';
import ButtonOne from './components/ButtonOne';
import ButtonTwo from './components/ButtonTwo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonOne disable/>
        <ButtonTwo></ButtonTwo>
      </div>
    );
  }
}

export default App;
