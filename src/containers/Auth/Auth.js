import React, {Component} from 'react';
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button.js'

class Auth extends Component {

  loginHandler = () => {

  };

  signinHandler = () => {

  };

  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Auth</h1>
          <form
            onSubmit={this.submitHandler}
            className={classes.AuthForm}
          >
            <input type="test"/>
            <input type="test"/>

            <Button
              type="success"
              onClick={this.loginHandler}
            >
              Log in
            </Button>
            <Button
              type="primary"
              onClick={this.signinHandler}
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;