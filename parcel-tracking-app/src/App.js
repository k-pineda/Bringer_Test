import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrackingView from './components/TrackingView';
import LoginView from './components/LoginView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrackingView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </Router>
  );
};

export default App;
