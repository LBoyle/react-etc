import React from 'react';
import NavigationBar from './NavigationBar';
import Main from './Main';

export default class App extends React.Component {
  render() {
    return (
      <div className="App row" id="app">
        <NavigationBar />
        <Main />
      </div>
    );
  }
}
