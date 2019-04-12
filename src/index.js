import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers } from 'redux-immutable'
import {
  createStore, applyMiddleware, compose
} from 'redux';

import './polyfills';

import { registerServiceWorker } from './services/index';
import * as reducers from './services/reducers';

import App from './App';

const composeEnhancers = process.env.NODE_ENV === 'development'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;


const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
