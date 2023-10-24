import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TrackingView from './components/TrackingView';
import LoginView from './components/LoginView';

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={TrackingView} />
      <Route path="/login" exact component={LoginView} />
    </Router>
  );
};

export default Routes;
