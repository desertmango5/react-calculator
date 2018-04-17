import React from 'react';
import EventLister, { withOptions } from 'react-event-listener';
import ReactTimeout from 'react-timeout';
import '../styles/button.css';

class Button extends React.Component {
  state = {
    clicked: false,
  };


  buttonDown = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  
  buttonUp = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  handleClick = (e) => {
    const buttonName = this.props.name;
    this.props.clickHandler(buttonName);
    this.buttonDown();
    this.props.setTimeout(this.buttonUp, 150);
  };

  keyboardClick = (keyName) => {
    const { which } = keyName;
    let newKey;
      if (which === 80) { newKey = '+'; }
      if (which === 77) { newKey = '−'; }
      if (which === 88) { newKey = '×'; }
      if (which === 68) { newKey = '÷'; }
      if (which === 78) { newKey = '±'; }
      if (which === 83) { newKey = '√'; }
      if (which === 32) { newKey = 'c'; }
      if (which === 190) { newKey = '.'; }
      if (which === 13) { newKey = '='; }
      if (which === 48) { newKey = '0'; }
      if (which === 49) { newKey = '1'; }
      if (which === 50) { newKey = '2'; }
      if (which === 51) { newKey = '3'; }
      if (which === 52) { newKey = '4'; }
      if (which === 53) { newKey = '5'; }
      if (which === 54) { newKey = '6'; }
      if (which === 55) { newKey = '7'; }
      if (which === 56) { newKey = '8'; }
      if (which === 57) { newKey = '9'; }
      if (!newKey) { return; }
    this.props.clickHandler(newKey);
  }

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
          onKeyDown={withOptions(this.keyboardClick, { passive: true, capture: false, } )}
        />
      </div>
    ); 
  };
}


export default ReactTimeout(Button);
