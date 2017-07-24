import classnames from 'classnames';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataLoader from './DataLoader';
import MemberGroup from './MemberGroup';

const DATA_URL = '/public/data/researches.json';

class Research extends Component {
  renderTopics() {
    return (
      <div className="c-research__category">
        <div className="c-research__category-title">
          Topics
        </div>
        <div className="c-research__work-list">
          <div className="c-research__work">
            <div className="c-research__work-title">
              Computational Social Science
            </div>
          </div>
          <div className="c-research__work">
            <div className="c-research__work-title">
              Topic Modeling
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderWork(work, i) {
    const links = work.links || {};
    const linkItems = Object.keys(links).map((key, i) => (
      <a
        key={key}
        href={links[key]}
        className="u-links__link"
      >
        {key}
      </a>
    ));

    return (
      <div
        key={i}
        className="c-research__work"
      >
        <div
          className={classnames(
            'c-research__work-title',
            'c-research__work-item'
          )}
        >
          {work.title}
        </div>
        <div
          className={classnames(
            'c-research__work-authors',
            'c-research__work-item'
          )}
        >
          {work.authors}
        </div>
        <div
          className={classnames(
            'c-research__work-booktitle',
            'c-research__work-item'
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

  renderCategory(category, i) {
    const workItems = category.researches.map((work, i) => this.renderWork(work, i));
    return (
      <div
        key={i}
        className="c-research__category"
      >
        <div className="c-research__category-title">
          {category.title}
        </div>
        <div className="c-research__work-list">
          {workItems}
        </div>
      </div>
    );
  }

  render() {
    const { data } = this.props;
    const categoryItems = data.map((category, i) => this.renderCategory(category, i));
    return (
      <div className="c-research">
        {this.renderTopics()}
        {categoryItems}
      </div>
    );
  }
}

export default (...props) => {
  return (
    <DataLoader json={DATA_URL}>
      <Research {...props} />
    </DataLoader>
  );
};
