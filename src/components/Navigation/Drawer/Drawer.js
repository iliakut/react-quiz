import React, {Component} from 'react';
import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop.js'

const links = [1, 2, 3];

class Drawer extends Component {
  constructor() {
    super();
  }

  renderLinks() {
    return links.map((item, index) => {
      return (
        <li key={index}>
          <a>Link {item}</a>
        </li>
        )
    })
  }

  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close)
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onCloseBackdrop}/> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;