import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TrackingView from './TrackingView';
import LoginView from './LoginView';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TrackingView} />
        <Route path="/login" exact component={LoginView} />
      </Switch>
    </Router>
  );
};

export default Routes;
