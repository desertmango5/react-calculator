import React, { Component } from 'react';
import '../styles/App.css';
import Buttons from './Buttons';

class App extends Component {
  state = {
    num1: null,
    num2: null,
    function: null,
  }

  add = (num1, num2) => {
    return num1 + num2;
  }

  subtract = (num1, num2) => {
    return num1 - num2;
  }

  multiply = (num1, num2) => {
    return num1 * num2;
  }

  divide = (num1, num2) => {
    return num1 / num2;
  }


  render() {
    const test = this.divide(7, 3);
    return (
      <div className="App">
        <Buttons />
      </div>
    );
  }
}

export default App;
