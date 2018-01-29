// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles/normalize.css';
// import './styles/skeleton.css';
// import './styles/index.css';
// import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';

const initialState = {
  result: 1,
  lastValues: []
};

const reducer = (state = initialState, action) => {
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
      console.log('Default reached');
      break;
  }
  return state;
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('store updated', store.getState());
});

store.dispatch({
  type: 'ADD',
  payload: 10
});
store.dispatch({
  type: 'ADD',
  payload: 100
});
store.dispatch({
  type: 'SUBTRACT',
  payload: 40
});



// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
