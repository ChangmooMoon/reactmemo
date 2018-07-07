import React from 'react';
import styles from './Header.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import TitleSVG from 'components/common/TitleSVG'

const cx = classNames.bind(styles)

const Header = () => (
  <header>
    <div className={cx('header-content')}>
      <Link to='/'>
        <TitleSVG />
      </Link>
    </div>
  </header>
)

export default Header;