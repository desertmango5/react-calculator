import React from 'react';
import Button from './Button';
import '../styles/FunctionButtons.css';

class FunctionButtons extends React.Component {
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  }

  render() {
    return (
      <section className="function-buttons">
        <Button name="&times;" className="multiply" clickHandler={this.handleClick} />
        <Button name="&divide;" className="divide" clickHandler={this.handleClick} />
        <Button name="&minus;" className="minus" clickHandler={this.handleClick} />
        <Button name="&radic;" className="sqrt" clickHandler={this.handleClick} />
        <section className="plus">
          <Button 
            name="&#43;" 
            className="plus__button" 
            clickHandler={this.handleClick}
          />
        </section>
        <Button 
          name="&plusmn;" 
          className="plus-minus" 
          clickHandler={this.handleClick} />
        <section className="clear">
          <Button  name="c" clickHandler={this.handleClick} red />
        </section>
      </section>
    );
  }
} 

export default FunctionButtons;
