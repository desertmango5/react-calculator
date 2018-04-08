import React from 'react';
import Addition from './Addition';
import Subtract from './Subtract';
import Multiply from './Multiply';
import Divide from './Divide';
import SquareRoot from './SquareRoot';
import PlusMinus from './PlusMinus';
import ClearButton from './ClearButton';
import '../styles/FunctionButtons.css';

const FunctionButtons = props => (
  <section className="function-buttons">
    <Multiply display="&times;" className="multiply" multiply={props.multiply} />
    <Divide display="&divide;" className="divide" divide={props.divide} />
    <Subtract display="&minus;" className="minus" subtract={props.subtract} />
    <SquareRoot display="&radic;" className="sqrt" sqrt={props.sqrt} onDisplay={props.display} />
    <section className="plus">
      <Addition 
        display="&#43;" 
        className="plus__button" 
        addition={props.addition} 
      />
    </section>
    <PlusMinus display="&plusmn;" className="plus-minus" plusMinus={props.plusMinus} />
    <section className="clear">
      <ClearButton clearDisplay={props.clearDisplay} display="c" />
    </section>
  </section>
);

export default FunctionButtons;
