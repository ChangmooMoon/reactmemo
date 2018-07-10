import React from 'react';
import styles from './Header.scss'
import classNames from 'classnames/bind'

import TitleSVG from 'components/common/TitleSVG'

const cx = classNames.bind(styles)

const Nav = () => (
  <Nav>
    <div className={cx('nav-content')}>
      안녕하세요
    </div>
  </Nav>
)

export default Nav;