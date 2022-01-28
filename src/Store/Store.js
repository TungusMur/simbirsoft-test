import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import rootReducers from './reducers/rootReducers';

const store = (reducers = {}, preLoadedState = {}, middleware = []) =>
  createStore(
    combineReducers({
      ...rootReducers,
      ...reducers,
    }),
    preLoadedState,
    compose(applyMiddleware(...middleware, thunk, reduxLogger))
  );

export default store;
