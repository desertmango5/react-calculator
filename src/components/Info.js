import React from 'react';
import '../styles/Info.css';

const Info = props => (
  <div className="calculator__info">
    <p onClick={props.clickHandler}><span role="img" aria-label="keyboard">⌨️</span></p>
  </div>
);

export default Info;
