import React from 'react';
import '../styles/ClearButton.css';

const ClearButton = props => (
  <div className="clear-button" onClick={props.clearDisplay}>
    {props.display}
  </div>
);

export default ClearButton;
