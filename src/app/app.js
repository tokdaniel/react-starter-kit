import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'assets/styles/main';

import { store, history } from './store';

render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Switch>
        <Route path="/" component={ () => <div>Hello World!</div> }/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
);