import React from 'react';
import NumberButtons from './NumberButtons';
import FunctionButtons from './FunctionButtons';
import Display from './Display';
import '../styles/Calculator.css';

const Calculator = props => (
  <div className="calculator">
    <section className="calculator__Display">
      <Display display={props.display} />
    </section>
    <NumberButtons 
      setNum1={props.setNum1}
      className="calculator__NumberButtons"
    />
    <FunctionButtons 
      className="calculator__FunctionButtons"
    /> 
  </div>
);

export default Calculator;
