import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import manageUsers from './reducers/manageUsers'

// use createStore from redux
// passing in the provided reducer, manageUsers, to create a store
const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // use Provider to wrap <App/ >, passing store as a prop
  // gives components access to store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
