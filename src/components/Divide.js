import React from 'react';
import '../styles/button.css';

const Divide = props => (
  <div className="button" onClick={() => props.divide()}>
    {props.display}
  </div>
);

export default Divide;
