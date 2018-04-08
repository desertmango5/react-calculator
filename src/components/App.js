import React, { Component } from 'react';
import '../styles/App.css';
import Calculator from './Calculator';

class App extends Component {
  state = {
    next: null,
    operation: null,
    total: null,
  }

  handleClick = (buttonName) => {
    console.log(buttonName);
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
