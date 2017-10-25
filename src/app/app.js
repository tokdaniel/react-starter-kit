import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'assets/scss/global';

import { ExampleComponent } from 'components';
import { ExampleContainer } from 'containers';

import store, { history } from './store';

render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Switch>
        <Route exact path="/" render={ () => <ExampleComponent exampleProp={ [] }/> }/>
        <Route exact path="/:someId" component={ ExampleContainer }/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
);