import React from 'react';
import '../styles/button.css';

const Equal = props => (
  <div className="button" onClick={() => props.equal()}>
    {props.display}
  </div>
);

export default Equal;
