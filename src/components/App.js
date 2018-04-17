import React, { Component } from 'react';
import '../styles/App.css';
import Calculator from './Calculator';
import calculate from '../logic/calculate';

class App extends Component {
  state = {
    next: null,
    operation: null,
    total: null,
  }


  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }


  render() {
    return (
      <div className="App">
        <Calculator 
          display={this.state.next || this.state.total || '0'}
          clickHandler={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
