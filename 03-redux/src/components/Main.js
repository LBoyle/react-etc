import React from 'react';

const Main = props => (
  <div className="Main">
    <div className="row">
      <div className="twelve columns">
        <h1>The Main Page</h1>
      </div>
    </div>
    <div className="row">
      <div className="twelve columns">
        <button onClick={() => props.changeUsername('Anna')}>
            Change the Username
        </button>
      </div>
    </div>
  </div>
);

export default Main;
