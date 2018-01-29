// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles/normalize.css';
// import './styles/skeleton.css';
// import './styles/index.css';
// import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD":
      state = state + action.payload;
      break;
    case "SUBTRACT":
    state = state - action.payload;
      break;
  }
  return state;
};

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log("store updated", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 10
});
store.dispatch({
  type: "ADD",
  payload: 100
});
store.dispatch({
  type: "SUBTRACT",
  payload: 40
});



// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
