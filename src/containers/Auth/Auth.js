import React, {Component} from 'react';
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button.js'
import Input from '../../components/UI/Input/Input.js'

class Auth extends Component {

  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Invalid email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Invalid password',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        }
      },
    }
  };

  loginHandler = () => {

  };

  signinHandler = () => {

  };

  submitHandler = e => {
    e.preventDefault();
  };

  onChangeHandler = (event, name) => {
    console.log(name, event.target.value);

  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((name, index) => {
      const control = this.state.formControls[name];
      return (
        <Input
          key={name + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={true}
          errorMessage={control.errorMessage}
          onChange={event => {
            this.onChangeHandler(event, name);
          }}
        />
      )
    });
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

            {this.renderInputs()}

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