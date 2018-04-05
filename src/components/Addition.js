import React from 'react';
import '../styles/button.css';

const Addition = props => (
  <div className="button" onClick={() => props.addition()}>
    {props.display}
  </div>
);

export default Addition;
