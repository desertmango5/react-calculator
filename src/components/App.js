import React, { Component } from 'react';
import '../styles/App.css';
import Calculator from './Calculator';

class App extends Component {
  state = {
    num1: null,
    num2: null,
    function: null,
    display: 0,
  }

  setNum1 = (num) => {
    this.setState({ num1: num });
  }

  render() {
    return (
      <div className="App">
        <Calculator 
          setNum1={this.setNum1}
          display={this.state.display}
        />
      </div>
    );
  }
}

export default App;
