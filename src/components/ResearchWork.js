import classnames from 'classnames';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ResearchWork extends Component {
  render() {
    const { work, isLinkVisible } = this.props;
    const links = work.links || {};
    const linkItems = isLinkVisible ? Object.keys(links).map((key, i) => (
      <a
        key={key}
        href={links[key]}
        className="u-links__link"
      >
        {key}
      </a>
    )) : null;

    return (
      <div className="c-research-work">
        <div
          className={classnames(
            'c-research-work__title',
            'c-research-work__item'
          )}
        >
          {work.title}
        </div>
        <div
          className={classnames(
            'c-research-work__authors',
            'c-research-work__item'
          )}
        >
          {work.authors}
        </div>
        <div
          className={classnames(
            'c-research-work__booktitle',
            'c-research-work__item'
          )}
        >
          {work.booktitle}
        </div>
        <div className="u-links">
          {linkItems}
        </div>
      </div>
    );
  }
}
