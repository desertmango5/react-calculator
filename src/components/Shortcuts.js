import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Info from './Info';
import '../styles/Shortcuts.css';

class Shortcuts extends React.Component {
  state = {
    hidden: true,
  }
  
  handleClick = () => {
    this.state.hidden ? this.setState({ hidden: false }) : this.setState({ hidden: true });
  };
  
  render() {
    const className = this.state.hidden ? 'shortcuts hidden' : 'shortcuts';

    return (
      <div>
        <Info clickHandler={this.handleClick} />
        <div className={className}>
          <div className="shortcuts__close" onClick={this.handleClick}>&times;</div>
          <h4 className="shortcuts__title">Keyboard Shortcuts</h4>
          <section className="shortcuts__left">
            <p>&#43; <span className="arrow">→</span> <span>p</span></p>
            <p>&minus; <span className="arrow">→</span> <span>m</span></p>
            <p>&times; <span className="arrow">→</span> <span>x</span></p>
            <p>&divide; <span className="arrow">→</span> <span>d</span></p>
          </section>
          <section className="shortcuts__right">
            <p>&radic; <span className="arrow">→</span> <span>s</span></p>
            <p>&plusmn; <span className="arrow">→</span> <span>n</span></p>
            <p>&#61; <span className="arrow">→</span> <span>Return</span></p>
            <p>c <span className="arrow">→</span> <span>space</span></p>
          </section>
        </div>
      </div>
    );
  }
}

export default Shortcuts;
