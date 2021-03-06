import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import reducers from './reducers';
import App from './components/App';
import Resources from './components/Resources';
import RequireAuth from './components/RequireAuth';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="resources" component={RequireAuth(Resources)} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

