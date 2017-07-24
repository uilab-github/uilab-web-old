import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './style/index.scss';
import App from './components/App';

render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
