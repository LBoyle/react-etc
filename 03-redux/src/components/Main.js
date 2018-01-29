import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="row">
          <div className="twelve columns">
            <h1>The Main Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <button onClick={() => this.props.changeUsername('Anna')}>
                Change the Username
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
