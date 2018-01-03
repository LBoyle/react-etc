import React from 'react';
import PropTypes from 'prop-types';
import validateInput from '../validators/signup';
import TextFieldGroup from './common/TextFieldGroup';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.history = props.history;
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    if(this.isValid()) {
      this.props.userSignupRequest(this.state)
        .then(res => {
          console.log(res.errors);
          if(res.errors) {
            const errors = {};
            for(var error in res.errors) {
              console.log(res.errors[error]);
              if(error === 'passwordHash') {
                errors['passwordConfirmation'] = 'Passwords do not match';
              } else {
                errors[error] = res.errors[error].message;
              }
            }
            setTimeout(() => {
              console.log(errors);
              this.setState({ errors: errors});
            }, 200);
          } else {
            this.setState({ username: '', email: '', password: '', passwordConfirmation: '' });
            this.history.push('/');
          }
        });
    } else {
      console.log(this.state);
    }
  }
  isValid() {
    validateInput(this.state, (errors, isValid) => {
      this.setState({ errors: errors }, () => isValid);
    });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="SignupForm">
        <p>signup form</p>
        <form onSubmit={this.onSubmit} method="POST" noValidate>
          <TextFieldGroup
            type="text"
            field="username"
            placeholder="Username"
            onChange={this.onChange}
            value={this.state.username}
            error={ errors.username }/><br />
          <TextFieldGroup
            type="email"
            field="email"
            placeholder="Email"
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}/><br />
          <TextFieldGroup
            type="password"
            field="password"
            placeholder="Password"
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}/><br />
          <TextFieldGroup
            type="password"
            field="passwordConfirmation"
            placeholder="Confirm Password"
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            error={errors.passwordConfirmation}/><br />
          <input
            type="submit"
            value="Submit" />
        </form>
      </div>
    );
  }
};
SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  history: PropTypes.object
};
export default SignupForm;
