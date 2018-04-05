import React from 'react';
import '../styles/button.css';

const SquareRoot = props => (
  <div className="button" onClick={() => props.sqrt()}>
    {props.display}
  </div>
);

export default SquareRoot;
