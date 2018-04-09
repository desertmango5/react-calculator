import React from 'react';
import NumberButtons from './NumberButtons';
import FunctionButtons from './FunctionButtons';
import Display from './Display';
import Shortcuts from './Shortcuts';
import '../styles/Calculator.css';

const Calculator = props => (
  <div className="calculator">
    <section className="calculator__Display">
      <Display 
        display={props.display} 
      />
    </section>
    <NumberButtons 
      className="calculator__NumberButtons"
      clickHandler={props.clickHandler}
    />
    <FunctionButtons 
      className="calculator__FunctionButtons"
      clickHandler={props.clickHandler}
    /> 
    <Shortcuts />
  </div>
);

export default Calculator;
