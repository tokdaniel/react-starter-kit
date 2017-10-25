import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

export const history = createBrowserHistory();
const logger = createLogger();
const router = routerMiddleware(history);

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, router, logger)
);

export default store;
