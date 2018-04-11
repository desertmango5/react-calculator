import React from 'react';
import EventLister, { withOptions } from 'react-event-listener';
import '../styles/button.css';

const Button = (props) => {
  const handleClick = (e) => {
    let { key } = e;
    if (key === 'p') { key = '+'; }
    if (key === 'm') { key = '−'; }
    if (key === 'x') { key = '×'; }
    if (key === 'd') { key = '÷'; }
    if (key === 'n') { key = '±'; }
    if (key === 's') { key = '√'; }
    if (key === ' ') { key = 'c'; }
    if (key === 'Enter') { key = '='; }
    
    const buttonName = key || props.name;
    props.clickHandler(buttonName);
  };

  const buttonClicked = () => 'button__clicked';
  const buttonColors = () => (props.red ? 'button red' : 
    props.black ? 'button black' : 'button');

  const className = [buttonColors()];
  
  return (
    <div className={className.join(' ')} onClick={handleClick}>
      {props.name}
      <EventLister 
        target="document"
        onKeyDown={handleClick}
      />
    </div>
  ); 
};

export default Button;
