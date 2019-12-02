import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './routes';
import './styles/index.css';

ReactDOM.render(
  <Router basename="/femidamurino/" >
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
