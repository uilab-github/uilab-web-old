import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer className="c-footer">
        <div className="c-footer__contact">
            Tel. +82 42 350 7749 <br />
            U&amp;I Lab., Room 4417, E3-1 Computer Science Building, <br />
            KAIST, 291 Daehak-ro, Yuseong-gu, Daejeon 305-701, South Korea
        </div>
      </footer>
    );
  }
}
