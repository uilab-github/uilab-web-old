import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class DataLoader extends Component {
  state = {
    data: undefined
  };

  componentDidMount() {
    fetch(this.props.json).then(response => {
    	return response.json();
    }).then(data => {
    	this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    const { children } = this.props;
    const body = data ? React.cloneElement(this.props.children, { data }) : null;
    const spinner = data === undefined ? (
      <div className="c-data-loader__spinner">

      </div>
    ) : null;
    const error = data === null ? (
      <div className="c-data-loader__error">

      </div>
    ) : null;
    return (
      <div className="c-data-loader">
        {body}
        {spinner}
        {error}
      </div>
    );
  }
}
