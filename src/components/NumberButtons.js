import React from 'react';
import PropTypes from 'prop-types';
import '../styles/NumberButtons.css';
import Button from './Button';

class NumberButtons extends React.Component {
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  }

  render() {
    return (
      <section className="number-buttons">
        <Button clickHandler={this.handleClick} name="7" />
        <Button clickHandler={this.handleClick} name="8" />
        <Button clickHandler={this.handleClick} name="9" />
        <Button clickHandler={this.handleClick} name="4" />
        <Button clickHandler={this.handleClick} name="5" />
        <Button clickHandler={this.handleClick} name="6" />
        <Button clickHandler={this.handleClick} name="1" />
        <Button clickHandler={this.handleClick} name="2" />
        <Button clickHandler={this.handleClick} name="3" />
        <Button clickHandler={this.handleClick} name="0" />
        <Button clickHandler={this.handleClick} name="." />
        <Button clickHandler={this.handleClick} name="=" black />
      </section>
    );
  }
};

NumberButtons.propTypes = {
  clickHandler: PropTypes.func,
}

export default NumberButtons;
