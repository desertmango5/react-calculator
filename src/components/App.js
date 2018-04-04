import React, { Component } from 'react';
import '../styles/App.css';
import Calculator from './Calculator';

class App extends Component {
  state = {
    num1: null,
    num2: null,
    function: null,
    initialDisplay: 0,
    display: [],
  }

  setDisplay = (num) => {
    const newDisplay = this.state.display;
    newDisplay.push(num);
    console.log(newDisplay);
    this.setState({ display: newDisplay });
  }

  clearDisplay = () => {
    this.setState({ display: [] });
  }

  render() {
    return (
      <div className="App">
        <Calculator 
          setNum1={this.setNum1}
          display={this.state.display}
          initialDisplay={this.state.initialDisplay}
          setDisplay={this.setDisplay}
          clearDisplay={this.clearDisplay}
        />
      </div>
    );
  }
}

export default App;
