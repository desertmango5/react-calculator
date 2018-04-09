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
            <p>&#43; <span>p</span></p>
            <p>&minus; <span>m</span></p>
            <p>&times; <span>t</span></p>
            <p>&divide; <span>d</span></p>
          </section>
          <section className="shortcuts__right">
            <p>c <span>c</span></p>
            <p>&radic; <span>s</span></p>
            <p>&plusmn; <span>n</span></p>
            <p>&#61; <span>return</span></p>
          </section>
        </div>
      </div>
    );
  }
}

export default Shortcuts;
