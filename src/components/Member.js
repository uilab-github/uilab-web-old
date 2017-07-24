import classnames from 'classnames';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Member extends Component {
  render() {
    const { member } = this.props;
    const bodyItems = [
      (
        <div
          key="name"
          className={classnames(
            'c-member__item',
            'c-member__name'
          )}
        >
          {member.name}
        </div>
      ),
      (
        <div
          key="email"
          className={classnames(
            'c-member__item',
            'c-member__email'
          )}
        >
          {member.email}
        </div>
      ),
      ...member.attributes.map((attr, i) => (
        <div
          key={i}
          className={classnames(
            'c-member__item',
            `c-member__item-${attr[0]}`
          )}
        >
          {attr[1]}
        </div>
      ))
    ];
    const linkItems = member.links.map((link, i) => (
      <a
        key={i}
        href={link[1]}
        className="u-link"
      >
        {link[0]}
      </a>
    ));
    return (
      <div className="c-member">
        <img
          className="c-member__profile-image"
          src={member.image}
        />
        <div className="c-member__body">
          {bodyItems}
          <div className="u__links">
            {linkItems}
          </div>
        </div>
      </div>
    );
  }
}
