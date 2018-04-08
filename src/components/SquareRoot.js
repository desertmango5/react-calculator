import React from 'react';
import '../styles/button.css';

const SquareRoot = props => (
  <div className="button" onClick={() => props.sqrt(props.onDisplay)}>
    {props.display}
  </div>
);

export default SquareRoot;
