import React from 'react';
import '../styles/NumberButtons.css';
import Num from './Num';

const NumberButtons = props => (
  <section className="number-buttons">
    <Num setNum1={props.setNum1} display="7" />
    <Num setNum1={props.setNum1} display="8" />
    <Num setNum1={props.setNum1} display="9" />
    <Num setNum1={props.setNum1} display="4" />
    <Num setNum1={props.setNum1} display="5" />
    <Num setNum1={props.setNum1} display="6" />
    <Num setNum1={props.setNum1} display="1" />
    <Num setNum1={props.setNum1} display="2" />
    <Num setNum1={props.setNum1} display="3" />
    <Num setNum1={props.setNum1} display="0" />
    <Num setNum1={props.setNum1} display="." />
    <Num setNum1={props.setNum1} display="=" />
  </section>
);

export default NumberButtons;
