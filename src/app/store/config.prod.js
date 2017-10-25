import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

export const history = createBrowserHistory();
const router = routerMiddleware(history);

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, router)
);

export default store;
