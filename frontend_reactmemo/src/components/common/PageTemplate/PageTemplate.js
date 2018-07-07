import React from 'react';
import styles from './PageTemplate.scss'
import classNames from 'classnames/bind'

import HeaderContainer from 'containers/HeaderContainer'

const cx = classNames.bind(styles)

const PageTemplate = ({children}) => {
  return (
    <div className={cx('template')}>
      <HeaderContainer />
      <main>
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;