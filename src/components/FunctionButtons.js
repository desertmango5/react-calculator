import React from 'react';
import '../styles/FunctionButtons.css';
import Func from './Func';
import ClearButton from './ClearButton';

const FunctionButtons = props => (
  <div className="function-buttons">
    <Func function="&times;" className="times" />
    <Func function="&divide;" className="divide" />
    <Func function="&minus;" className="minus" />
    <Func function="&radic;" className="sqrt" />
    <Func function="&#43;" className="plus" />
    <Func function="&plusmn;" className="plus-minus" />
    <ClearButton function="c" className="clear" />
  </div>
);

export default FunctionButtons;
