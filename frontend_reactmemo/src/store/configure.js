import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import * as modules from './modules'

const reducers = combineReducers(modules)

// devTool
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

// preloadedState = server-side rendering initialState
const configure = (preloadedState) => createStore(reducers, preloadedState, composeEnhancers(
  applyMiddleware()
));

export default configure;