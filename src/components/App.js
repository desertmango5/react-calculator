import React, { Component } from 'react';
import '../styles/App.css';
import Calculator from './Calculator';

class App extends Component {
  state = {
    num1: [],
    num2: [],
    function: null,
    initialDisplay: 0,
    display: [],
  }

  setDisplay = (num) => {
    const newDisplay = this.state.display;
    newDisplay.push(num);
    this.setState({ display: newDisplay });
  }
  
  clearDisplay = () => {
    this.setState({ 
      display: [],
      function: null,
    });
  }

  addition = () => {
    this.setState({
      num1: this.state.display,
      function: 'add',
    })
  }

  subtract = () => {
    this.setState({
      num1: this.state.display,
      function: 'subtract',
    })
  }

  multiply = () => {
    this.setState({
      num1: this.state.display,
      function: 'multiply',
    })
  }

  divide = () => {
    this.setState({
      num1: this.state.display,
      function: 'divide',
    })
  }

  sqrt = () => {
    this.setState({ num1: this.state.display })
    const str = this.state.num1;
    const num = str.join('');
    const sq = Math.sqrt(parseInt(num, 10));
    console.log(sq);
    this.setState({
      display: sq,
    })
  }

  plusMinus = () => {
    this.setState({
      num1: this.state.display,
      function: 'plusMinus',
    })
  }

  render() {
    return (
      <div className="App">
        <Calculator 
          display={this.state.display}
          initialDisplay={this.state.initialDisplay}
          setDisplay={this.setDisplay}
          clearDisplay={this.clearDisplay}
          addition={this.addition}
          subtract={this.subtract}
          multiply={this.multiply}
          divide={this.divide}
          sqrt={this.sqrt}
          plusMinus={this.plusMinus}
        />
      </div>
    );
  }
}

export default App;
