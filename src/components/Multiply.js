import React from 'react';
import '../styles/button.css';

const Multiply = props => (
  <div className="button" onClick={() => props.multiply()}>
    {props.display}
  </div>
);

export default Multiply;
