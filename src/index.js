import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import StoreContext from 'storeon/react/context'

import routes from './routes';
import history from "./history";
import store from './store';
import './styles/index.css';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <Switch>
        {routes.map((route, ind) => 
          <Route 
            key={ind}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        )}
      </Switch>
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root')
);
