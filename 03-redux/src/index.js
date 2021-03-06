import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/index.css';
import store from './store';
import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();

// const myLogger = state => next => action => {
//   console.log('Log: ', action, state.getState());
//   next(action);
// };

// store.subscribe(() => {
//   console.log('store updated', store.getState());
// });

// store.dispatch({
//   type: 'ADD',
//   payload: 10
// });
// store.dispatch({
//   type: 'ADD',
//   payload: 100
// });
// store.dispatch({
//   type: 'SUBTRACT',
//   payload: 40
// });
// store.dispatch({
//   type: 'SET_AGE',
//   payload: 40
// });
// store.dispatch({
//   type: 'SET_NAME',
//   payload: 'Bill'
// });
