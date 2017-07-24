import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Index from './Index';

export default class App extends Component {
  render() {
    return (
      <div className="c-app">
        <Switch>
          <Route path="/" component={Index} />
        </Switch>
      </div>
    );
  }
}
