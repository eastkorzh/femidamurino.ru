import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';

import routes from './routes';
import history from "./history";
import './styles/index.css';

ReactDOM.render(
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
  </Router>,
  document.getElementById('root')
);
