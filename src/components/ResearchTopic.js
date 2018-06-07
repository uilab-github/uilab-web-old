import classnames from 'classnames';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ResearchTopic extends Component {
  renderIcon() {
    const {
      hidden,
    } = this.props;

    return hidden ? (
      <i className="fa fa-circle" />
    ) : (
      <i className="fa fa-check-circle" />
    );
  }

  render() {
    const { 
      topic, 
      onClick,
      hidden,
      showTopic,
      hideTopic,
    } = this.props;

    return (
      <a 
        className={classnames(
          'c-research-topic',
          { 'c-research-topic--hidden': hidden }
        )}
        onClick={hidden ? showTopic : hideTopic}
      >
        {this.renderIcon()}
        {topic.title}
      </a>
    );
  }
}
