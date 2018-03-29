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
    <Func display="&#43;" className="plus" />
    <Func display="&plusmn;" className="plus-minus" />
    <ClearButton display="c" className="clear" />
  </section>
);

export default FunctionButtons;
