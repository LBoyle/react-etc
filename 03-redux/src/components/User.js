import React from 'react';

const User = props => (
  <div className="User">
    <div className="row">
      <div className="twelve columns">
        <h1>The User Page</h1>
      </div>
    </div>
    <div className="row">
      <div className="twelve columns">
        <p>User Name: {props.username}</p>
      </div>
    </div>
  </div>
);

export default User;
