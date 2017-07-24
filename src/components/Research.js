import classnames from 'classnames';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataLoader from './DataLoader';
import ResearchWork from './ResearchWork';

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

  renderCategory(category, i) {
    const workItems = category.researches.map((work, i) => (
      <ResearchWork
        key={i}
        work={work}
        isLinkVisible={true}
      />
    ));
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
