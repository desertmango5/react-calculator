import React from 'react';
import '../styles/Display.css';

const Display = props => (
  <div className="display">
    <section className="display__border">
      <section className="display__screen">
        <p className="display__numbers">{props.display}</p>
      </section>
    </section>
  </div>
);

export default Display;
