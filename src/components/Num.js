import React from 'react';
import '../styles/button.css';

const Num = props => (
  <div className="button" onClick={() => props.setNum1(props.display)}>
    {props.display}
  </div>
);

export default Num;
