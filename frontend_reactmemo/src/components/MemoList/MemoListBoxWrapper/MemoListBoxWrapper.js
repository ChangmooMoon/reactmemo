import React from 'react';
import styles from './MemoListBoxWrapper.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const MemoListWrapper = ({children}) => {
  return (
    <div className={cx('memolist-box')}>
      {children}
    </div>
  );
};

export default MemoListWrapper;