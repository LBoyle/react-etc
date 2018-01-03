import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import setAuthToken from './utils/setAuthToken';
import App from './components/App';
import './style/normalize.css';
import './style/skeleton.css';
import './style/index.css';

const store = createStore((state = {}) => state, applyMiddleware(thunk));

setAuthToken(localStorage.jwtToken);

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory(this.props)}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
