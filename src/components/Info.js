import React from 'react';
import '../styles/Info.css';

const Info = props => (
  <div className="calculator__info" onClick={props.clickHandler}>
    <p>&#8505;</p>
  </div>
);

export default Info;
