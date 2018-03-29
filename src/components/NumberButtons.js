import React from 'react';
import '../styles/NumberButtons.css';
import Num from './Num';

const NumberButtons = props => (
  <div className="number-buttons">
    <Num number="7" />
    <Num number="8" />
    <Num number="9" />
    <Num number="4" />
    <Num number="5" />
    <Num number="6" />
    <Num number="1" />
    <Num number="2" />
    <Num number="3" />
    <Num number="0" />
    <Num number="." />
    <Num number="=" />
  </div>
);

export default NumberButtons;
