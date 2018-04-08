import React from 'react';
import '../styles/button.css';

const Button = (props) => {
  const handleClick = () => {
    props.clickHandler(props.name);
  };

  const className = props.red ? 'button red' : 'button';
  
  return (
    <div className={className} onClick={handleClick}>
      {props.name}
    </div>
  ); 
};

export default Button;
