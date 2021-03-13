import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const middlewares = [];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducers, enhancer);


export default store;
