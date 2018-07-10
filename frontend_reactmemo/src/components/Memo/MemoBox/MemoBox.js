import React from 'react';
import styles from './MemoBox.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const MemoBox = ({
  title = '제목이 길면 어떡하죠?',
  content = '이것은 내용입니다',
  modifiedDate = '2018-07-07'
}) => {
  return (
    <div className={cx('memo-content')}>
      <div className={cx('deco-box')}>
        <div className={cx('title-left')}>
          <span>{title}</span>
        </div>
        <div className={cx('title-right')}>
          Updated: {modifiedDate}
        </div>
        <div className={cx('content')}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default MemoBox;