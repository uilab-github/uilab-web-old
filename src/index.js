import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './style/index.scss';
import 'isomorphic-fetch';
import App from './components/App';

render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
