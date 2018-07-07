import React from 'react';
import styles from './LabelBoxWrapper.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const LabelWrapper = ({children}) => {
  return (
    <div className={cx('label-box')}>
      {children}
    </div>
  );
};

export default LabelWrapper;