import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div className="User">
        <div className="row">
          <div className="twelve columns">
            <h1>The User Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <p>User Name: {this.props.username}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
