import React from 'react';
import '../styles/button.css';

const PlusMinus = props => (
  <div className="button" onClick={() => props.plusMinus()}>
    {props.display}
  </div>
);

export default PlusMinus;
