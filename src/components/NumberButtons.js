import React from 'react';
import '../styles/NumberButtons.css';
import Num from './Num';
import Equal from './Equal';

const NumberButtons = props => (
  <section className="number-buttons">
    <Num setDisplay={props.setDisplay} display="7" />
    <Num setDisplay={props.setDisplay} display="8" />
    <Num setDisplay={props.setDisplay} display="9" />
    <Num setDisplay={props.setDisplay} display="4" />
    <Num setDisplay={props.setDisplay} display="5" />
    <Num setDisplay={props.setDisplay} display="6" />
    <Num setDisplay={props.setDisplay} display="1" />
    <Num setDisplay={props.setDisplay} display="2" />
    <Num setDisplay={props.setDisplay} display="3" />
    <Num setDisplay={props.setDisplay} display="0" />
    <Num setDisplay={props.setDisplay} display="." />
    <Equal setDisplay={props.setDisplay} display="=" />
  </section>
);

export default NumberButtons;
