import React from 'react';
import ReactDOM from 'react-dom';
import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD":
      break;
    case "SUBTRACT":
      break;
  }
  return state;
};

// const store = createStore(, 1);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
