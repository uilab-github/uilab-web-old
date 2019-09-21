import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataLoader from './DataLoader'
import ResearchWork from './ResearchWork';

const DATA_URL = '/public/data/researches.json';
const MAX_PUBLICATION_COUNT = 5;

class Home extends Component {
  getLatestPublications() {
    const { data } = this.props;
    const works = data.categories.filter(category => category.title === 'Publications')[0].researches;
    return works.length > MAX_PUBLICATION_COUNT ? works.slice(0, MAX_PUBLICATION_COUNT) : works;
  }

  render() {
    const publicationItems = this.getLatestPublications().map((work, i) => (
      <ResearchWork
        key={i}
        work={work}
      />
    ));
    return (
      <div className="c-home">
        <div className="c-home__announcement">
          <p>
            <strong>[공지]</strong><br />
            2020년 봄학기 전산학부 석사과정으로 입학하는 학생 중 U&I Lab에 들어오길 희망하시는 분은 
            2019년 10월 6일까지 <a href="mailto:alice.oh@kaist.edu">alice.oh@kaist.edu</a> 로 간단한 자기소개와 CV를 보내주세요.
          </p>
          <p>
            <strong>[Announcement]</strong><br />
            If you are entering KAIST School of Computing as a new MS student 
            in Spring 2020 and would like to join U&I Lab, please email your introduction and CV to <a href="mailto:alice.oh@kaist.edu">alice.oh@kaist.edu</a> by October 6, 2019.
          </p>
        </div>
        <div className="c-home__main-image-container">
          <img
            className="c-home__main-image"
            src="/public/images/uilab-devices.jpg"
            alt="U&I Lab."
          />
        </div>
        <div className="c-home__publications-title">
          Latest publications
        </div>
        <div className="c-home__publications">
          {publicationItems}
        </div>
        <div className="u-links">
          <Link
            className="u-links__link"
            to="/research"
          >
            See More
          </Link>
        </div>
      </div>
    );
  }
}

export default (...props) => {
  return (
    <DataLoader json={DATA_URL}>
      <Home {...props} />
    </DataLoader>
  );
};
