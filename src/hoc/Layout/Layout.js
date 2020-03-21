import React, {Component} from 'react'
import classes from './Layout.module.css'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle.js";
import Drawer from "../../components/Navigation/Drawer/Drawer.js";
import {connect} from "react-redux";
class Layout extends Component {
  state = {
    menu: false,
  };

  toggleMenuHandler = () => {
     this.setState({
       menu: !this.state.menu,
     })
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false,
    })
  };

  render() {
    return (
      <div className={classes.Layout}>

        <Drawer
          isOpen={this.state.menu}
          onCloseBackdrop={this.menuCloseHandler}
          isAuthentificated={this.props.isAuthentificated}
        />

        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

function mapStateToPtops(state) {
  return {
      isAuthentificated: !!state.auth.token
  }
}

export default connect(mapStateToPtops)(Layout);
