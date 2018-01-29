import React, { Component } from 'react';
import User from './User';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Max"
    };
  }

  changeUsername(newName) {
    this.setState({
      username: newName
    });
  }

  render() {
    return (
      <div className="container">
        <Main changeUsername={this.changeUsername.bind(this)}/>
        <User username={this.state.username}/>
      </div>
    );
  }
}

export default App;
