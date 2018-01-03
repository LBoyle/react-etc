import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.history = props.history;
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({errors: {}});
    this.props.userLoginRequest(this.state)
      .then(res => {
        if(!res.user) {
          console.log('Authentication failed');
          this.setState({errors: res});
        }
        this.history.push('/');
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="LoginForm" method="POST">
        <p>login form</p>
        <form onSubmit={this.onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.onChange}
            value={this.state.email}/><br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.onChange}
            value={this.state.password}/><br />
          <input
            type="submit"
            value="Submit" />
        </form>
      </div>
    );
  }
};
LoginForm.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
  history: PropTypes.object
};
export default LoginForm;
