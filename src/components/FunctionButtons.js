import React from 'react';
import Func from './Func';
import ClearButton from './ClearButton';
import '../styles/FunctionButtons.css';

const FunctionButtons = props => (
  <section className="function-buttons">
    <Func display="&times;" className="multiply" />
    <Func display="&divide;" className="divide" />
    <Func display="&minus;" className="minus" />
    <Func display="&radic;" className="sqrt" />
    <section className="plus">
      <Func display="&#43;" className="plus__button" />
    </section>
    <Func display="&plusmn;" className="plus-minus" />
    <section className="clear">
      <ClearButton clearDisplay={props.clearDisplay} display="c" />
    </section>
  </section>
);

export default FunctionButtons;
