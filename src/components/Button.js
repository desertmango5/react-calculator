import React from 'react';
import EventLister, { withOptions } from 'react-event-listener';
import '../styles/button.css';

const Button = (props) => {
  const handleKeydown = e => e.key;

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

  const className = props.red ? 'button red' : 
    props.black ? 'button black' : 'button';
  
  return (
    <div className={className} onClick={handleClick}>
      {props.name}
      <EventLister 
        target="document"
        onKeyDown={handleClick}
      />
    </div>
  ); 
};

export default Button;
