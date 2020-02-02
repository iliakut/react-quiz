import React, {Component} from 'react';
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button.js'
import Input from '../../components/UI/Input/Input.js'

class Auth extends Component {

  state = {
    isFormValid: false,
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

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  validateControl(value, validation) {
    if (!validation) return true;

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (validation.email) {
      isValid = this.validateEmail(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  }

  onChangeHandler = (event, name) => {
    const formControls = {...this.state.formControls};
    const control = {...formControls[name]};

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);
    formControls[name] = control;

    const isFormValid = Object.keys(formControls).every(name => {
      return formControls[name].valid;
    });

    this.setState({
      formControls, isFormValid
    })
  };

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
              disabled={!this.state.isFormValid}
            >
              Log in
            </Button>
            <Button
              type="primary"
              onClick={this.signinHandler}
              disabled={!this.state.isFormValid}
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