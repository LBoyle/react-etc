import React from 'react';

const Main = props => (
  <div className="Main">
    <div className="row">
      <div className="twelve columns">
        <h4>The Main Page</h4>
      </div>
    </div>
    <div className="row">
      <div className="twelve columns">
        <form onSubmit={(e) => {e.preventDefault();props.changeUsername(e.target.name.value);}}>
          <input
            type="text"
            name="name" /><br />
          <input
            type="submit"
            value="submit" />
        </form>
      </div>
    </div>
  </div>
);

export default Main;
