import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import shotsDuck from '../shots/duck';

const rootReducer = combineReducers({
  shots: shotsDuck,
});

const middlewares = [
  promiseMiddleware(),
  thunk,
  process.env.NODE_ENV !== 'production' ? createLogger() : undefined,
].filter(Boolean);

const store = createStore(rootReducer, {}, compose(applyMiddleware(...middlewares)));

export default store;
