import React from 'react';
import '../styles/NumberButtons.css';
import Num from './Num';

const NumberButtons = props => (
  <section className="number-buttons">
    <Num display="7" />
    <Num display="8" />
    <Num display="9" />
    <Num display="4" />
    <Num display="5" />
    <Num display="6" />
    <Num display="1" />
    <Num display="2" />
    <Num display="3" />
    <Num display="0" />
    <Num display="." />
    <Num display="=" />
  </section>
);

export default NumberButtons;
