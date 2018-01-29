import React from 'react';
import ReactDOM from 'react-dom';
import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { Provider } from 'react-redux';

const mathReducer = (state = {
  result: 1,
  lastValues: []
}, action) => {
  switch(action.type) {
    case 'ADD':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case 'SUBTRACT':
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    default:
      break;
  }
  return state;
};

const userReducer = (state = {
  name: 'Louis',
  age: 28,
  lastValues: []
}, action) => {
  switch(action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    default:
      break;
  }
  return state;
};

const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(logger));

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
