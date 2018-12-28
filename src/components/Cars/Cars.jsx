import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import { CarListConnected, CarAddConnected } from './';

const Cars = () => (
  <div className="container container--inset">
    <Link to="/list">LIST</Link>
    <Link to="/add">ADD</Link>
    <Switch>
      <Route exact path="/add" component={CarAddConnected} />
      <Route path="/" component={CarListConnected} />
    </Switch>
  </div>
);

export { Cars };
