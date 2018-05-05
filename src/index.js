import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import auth from '~/redux/auth';
import RootNavigation from './navigation/RootNavigation';

const store = createStore(auth, applyMiddleware(logger));

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
