import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupAction';
import SignupForm from './SignupForm';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.history = props.history;
  }
  render() {
    return (
      <div className="SignupPage">
        <h3>Signup</h3>
        <br />
        <div id="signup-form">
          <SignupForm userSignupRequest={this.props.userSignupRequest} history={this.history} />
        </div>
      </div>
    );
  }
};
SignupPage.propTypes = {
  userSignRequest: PropTypes.func
};
export default connect(null, { userSignupRequest })(SignupPage);
