import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import About from './About';
import Home from './Home';

export default class Main extends React.Component {
  render() {
    return (
      <main className="Main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
    );
  }
}
