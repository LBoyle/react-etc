import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.usersList = [];
  }
  getUsers() {
    axios.get('http://localhost:8000/api/v1/users')
      .then(users => {
        this.usersList = users.data;
        this.forceUpdate();
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="Home">
        <h3>Home</h3>
        <button onClick={() => this.getUsers()}>Get Users</button>
        <ul id="users-display">
          {
            this.usersList.map(user => (
              <li key={user._id}>{user.username + ': ' + user._id}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}
