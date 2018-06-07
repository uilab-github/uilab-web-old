import classnames from 'classnames';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ResearchWork extends Component {
  handleLinkClick = eventLabel => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'ResearchLink',
      eventAction: 'click',
      eventLabel: eventLabel
    });
  }

  render() {
    const { work, isLinkVisible, topicMap } = this.props;
    const links = work.links || {};
    const linkItems = isLinkVisible ? Object.keys(links).map((key, i) => (
      <a
        key={key}
        href={links[key]}
        className="u-links__link"
        target="_blank"
        onClick={() => this.handleLinkClick(`${work.title}::${key}`)}
      >
        {key}
      </a>
    )) : null;

    const titleItem = work.title ? (
      <div
        className={classnames(
          'c-research-work__title',
          'c-research-work__item'
        )}
      >
        {work.title}
      </div>
    ) : null;

    const authorsItem = work.authors ? (
      <div
        className={classnames(
          'c-research-work__authors',
          'c-research-work__item'
        )}
      >
        {work.authors}
      </div>
    ) : null;

    const booktitleItem = work.booktitle ? (
      <div
        className={classnames(
          'c-research-work__booktitle',
          'c-research-work__item'
        )}
      >
        {work.booktitle}
      </div>
    ) : null;

    const topics = work.topics || [];
    const topicTitles = topics.filter(topic => topic in topicMap).map(topic => topicMap[topic]);
    const topicItem = work.topics && work.topics.length > 0 ? (
      <div
        className={classnames(
          'c-research-work__topics',
          'c-research-work__item'
        )}
      >
        {topicTitles.join(', ')}
      </div>
    ) : null;

    return (
      <div className="c-research-work">
        {titleItem}
        {authorsItem}
        {booktitleItem}
        {topicItem}
        <div className="u-links">
          {linkItems}
        </div>
      </div>
    );
  }
}
