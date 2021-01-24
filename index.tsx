/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import {name as appName} from './app.json';
import allReducers from './redux/reducers';
import App from './App';
import {rootSaga} from './redux/sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware() 
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const RNRedux = () => {
  return(
  <Provider store={store}>
    <App />
  </Provider>
  )
};

sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => RNRedux);
