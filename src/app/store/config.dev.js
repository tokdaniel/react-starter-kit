import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';

import { rootReducer } from '../reducers';
import { rootEpic } from '../epics';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();
const router = routerMiddleware(history);
const epic = createEpicMiddleware(rootEpic);

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(router, epic)
  )
);