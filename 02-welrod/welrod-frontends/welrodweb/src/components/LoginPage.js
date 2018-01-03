import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLoginRequest } from '../actions/loginAction';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.history = props.history;
  }
  render() {
    return (
      <div className="LoginPage">
        <h3>Login</h3>
        <br />
        <div id="login-form">
          <LoginForm userLoginRequest={this.props.userLoginRequest} history={this.history} />
        </div>
      </div>
    );
  }
};
LoginPage.propTypes = {
  userLoginRequest: PropTypes.func
};
export default connect(null, { userLoginRequest })(LoginPage);
