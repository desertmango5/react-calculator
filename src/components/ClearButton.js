import React from 'react';
import '../styles/ClearButton.css';

const ClearButton = props => (
  <div className="clear-button">
    {props.function}
  </div>
);

export default ClearButton;
