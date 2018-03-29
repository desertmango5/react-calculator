import React from 'react';
import '../styles/Calculator.css';
import NumberButtons from './NumberButtons';
import FunctionButtons from './FunctionButtons';

const Calculator = props => (
  <div className="calculator">
    <NumberButtons className="NumberButtons" />
    <FunctionButtons />
  </div>
);

export default Calculator;
