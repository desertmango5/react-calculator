import React from 'react';
import keyboardTest from '../logic/keyboardTest';
import EventLister, { withOptions } from 'react-event-listener';
import '../styles/button.css';

class Button extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    // const key = this.keyboard(e);
    // const buttonName = key ? key : this.props.name;
    const buttonName = this.props.name;
    this.props.clickHandler(buttonName);
  };

  keyboard = (keyName) => {
    const { key } = keyName;
    let newKey;
    if (keyboardTest(key)) {
      if (key === 'p') { newKey = '+'; }
      if (key === 'm') { newKey = '−'; }
      if (key === 'x') { newKey = '×'; }
      if (key === 'd') { newKey = '÷'; }
      if (key === 'n') { newKey = '±'; }
      if (key === 's') { newKey = '√'; }
      if (key === ' ') { newKey = 'c'; }
      if (key === '.') { newKey = '.'; }
      if (key === 'Enter') { newKey = '='; }
      if (key === '0') { newKey = '0'; }
      if (key === '1') { newKey = '1'; }
      if (key === '2') { newKey = '2'; }
      if (key === '3') { newKey = '3'; }
      if (key === '4') { newKey = '4'; }
      if (key === '5') { newKey = '5'; }
      if (key === '6') { newKey = '6'; }
      if (key === '7') { newKey = '7'; }
      if (key === '8') { newKey = '8'; }
      if (key === '9') { newKey = '9'; }
    } else { return; }
    this.props.clickHandler(newKey);
  }

  isClicked = () => {
    console.log('is clicked');
  };

  render() {
    const { clicked } = this.state;

    const buttonClicked = () => clicked ? 'button__clicked' : '';
    const buttonColors = () => (this.props.red ? 'button red' : 
      this.props.black ? 'button black' : 'button');
  
    const className = [buttonColors(), buttonClicked()];
    
    return (
      <div className={className.join(' ')} onClick={this.handleClick}>
        {this.props.name}
        <EventLister
          target="document"
          onKeyDown={withOptions(this.keyboard, { passive: true, capture: false, } )}
        />
      </div>
    ); 
  };
}


export default Button;
