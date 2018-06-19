import classnames from 'classnames';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ResearchTopic extends Component {
  renderIcon() {
    const {
      topic,
      hidden,
    } = this.props;

    const style = topic.color ? { color: topic.color } : {};
    return hidden ? (
      <i className="fa fa-circle" style={style} />
    ) : (
      <i className="fa fa-check-circle" style={style} />
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
