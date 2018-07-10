import React from 'react';
import styles from './MemoListBox.scss'
import classNames from 'classnames/bind'

import AddCircle from 'static/AddCircle'
import Bin from 'static/Bin'

const cx = classNames.bind(styles)

const AddMemo = () => {
  return(
    <div className={cx('action-icon')}>
      <AddCircle width='10' height='20'/>
    </div>
  )
}

const DeleteMemo = () => {
  return (
    <div className={cx('action-icon')}>
      <Bin />
    </div>
  )
}

const ControlBox = () => {
  return (
    <div classname={cx('control-box')}>
      <AddMemo />
      <DeleteMemo />
    </div>
  )
}

const HeadBox = ({
  label = 'label',
  amount = 0
}) => {
  return (
    <div className={cx('head-box')}>
      <div className={cx('deco-box')}>
        <span className={cx('label-title')}>{label}({amount})</span>
      </div>
    </div>
  )
}

const MemoItem = ({
  title = '제목이 넘나 길어서 큰일일세',
  createdAt = '2018-07-07',
  contents = '미리보기내용이라네 이것도 너무 길어서 큰일일세'
}) => {
  return(
    <div className={cx('memo-item')}>
      <div className={cx('deco-box')}>
        <div className={cx('title')}>{title}</div>
        <div className={cx('date')}>Created: {createdAt}</div>
        <div className={cx('contents')}>{contents}</div>
      </div>
    </div>
  )
}

let MemoItems = [<MemoItem />,<MemoItem />,<MemoItem />,<MemoItem />]

const MemoListBox = () => {
  return (
    <div>
      <HeadBox />
      <ControlBox />
      {MemoItems.map(item => item)}
    </div>
  );
};

export default MemoListBox;