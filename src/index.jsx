import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App/App';
import './index.scss';
import store from './app/configureStore';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
