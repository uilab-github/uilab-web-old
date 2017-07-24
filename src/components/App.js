import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Members from './Members';

export default class App extends Component {
  render() {
    return (
      <div className="c-app u-container">
        <Header />
        <div className="c-app__body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/members" component={Members} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
