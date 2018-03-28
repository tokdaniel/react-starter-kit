import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';


import { rootReducer } from '../reducers';
import { rootEpic } from '../epics';

export const history = createBrowserHistory();
const router = routerMiddleware(history);
const epic = createEpicMiddleware(rootEpic);

export const store = createStore(
  rootReducer,
  applyMiddleware(router, epic)
);