import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Members from './Members';
import NotFound from './NotFound';
import Research from './Research';
import Links from './Links';

export default class LocationTracker extends Component {
  componentDidMount() {
    this.trackPageview();
  }

  componentDidUpdate(prevProps, prevState) {
    this.trackPageview();
  }

  trackPageview() {
    const pathname = this.props.location.pathname;
    ga('send', 'pageview', pathname);
  }

  render() {
    return <div className="c-location-tracker u-no-display" />
  }
}
