import React from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import App from './app/App/App';
import shotsDuck from './shots/duck';
import './index.scss';

const rootReducer = combineReducers({
  shots: shotsDuck,
});

const store = createStore(rootReducer, {}, applyMiddleware(...[
  promiseMiddleware(),
  process.env.NODE_ENV !== 'production' ? createLogger() : undefined,
].filter(Boolean)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
