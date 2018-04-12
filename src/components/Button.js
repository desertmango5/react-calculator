import React from 'react';
import keyboard from '../logic/keyboard';
import EventLister, { withOptions } from 'react-event-listener';
import '../styles/button.css';

class Button extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = (e) => {
    let { key } = e;
    if (keyboard(key)) {
      if (key === 'p') { key = '+'; }
      if (key === 'm') { key = '−'; }
      if (key === 'x') { key = '×'; }
      if (key === 'd') { key = '÷'; }
      if (key === 'n') { key = '±'; }
      if (key === 's') { key = '√'; }
      if (key === ' ') { key = 'c'; }
      if (key === 'Enter') { key = '='; }
    } else { return; }
    
    const buttonName = key || this.props.name;
    this.props.clickHandler(buttonName);
    this.setState({ clicked: true });
  };

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
          onKeyDown={withOptions(this.handleClick, { passive: true, capture: false, } )}
        />
      </div>
    ); 
  };
}


export default Button;
