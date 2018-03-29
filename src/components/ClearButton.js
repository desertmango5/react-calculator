import React from 'react';
import '../styles/ClearButton.css';

const ClearButton = props => (
  <div className="clear-button">
    {props.display}
  </div>
);

export default ClearButton;
