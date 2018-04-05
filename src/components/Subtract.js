import React from 'react';
import '../styles/button.css';

const Subtract = props => (
  <div className="button" onClick={() => props.subtract()}>
    {props.display}
  </div>
);

export default Subtract;
