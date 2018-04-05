import React from 'react';
import NumberButtons from './NumberButtons';
import FunctionButtons from './FunctionButtons';
import Display from './Display';
import '../styles/Calculator.css';

const Calculator = props => (
  <div className="calculator">
    <section className="calculator__Display">
      <Display 
        display={props.display} 
        initialDisplay={props.initialDisplay}  
      />
    </section>
    <NumberButtons 
      setDisplay={props.setDisplay}
      equal={props.equal}
      className="calculator__NumberButtons"
    />
    <FunctionButtons 
      className="calculator__FunctionButtons"
      clearDisplay={props.clearDisplay}
      addition={props.addition}
      subtract={props.subtract}
      multiply={props.multiply}
      divide={props.divide}
      sqrt={props.sqrt}
      plusMinus={props.plusMinus}
    /> 
  </div>
);

export default Calculator;
