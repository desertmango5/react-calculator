import React from 'react';
import '../styles/Display.css';

const Display = props => (
  <div className="display">
    <section className="display__text">
      <p className="display__text-name">REACT-CALC</p>
      <p className="display__text-date">D042018</p>
    </section>
    <section className="display__border">
      <section className="display__screen">
        <p className="display__numbers">
          {props.display.length ? props.display : props.initialDisplay}
        </p>
      </section>
    </section>
  </div>
);

export default Display;
