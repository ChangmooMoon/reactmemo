import React from 'react';
import styles from './MemoListBox.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const ControlBox = ({
  label = '라벨도길수도있다'
}) => {
  return (
    <div className={cx('control-box')}>
      <span className={cx('label-title')}>{label}</span>
      <span>
        <button>Add</button>
        <button>Del</button>
        </span>
    </div>
  )
}

const MemoItem = ({
  title = '제목이 넘나 길어서 큰일일세',
  date = '2018-07-07',
  contents = '미리보기내용이라네 이것도 너무 길어서 큰일일세'
}) => {
  return(
    <div className={cx('memo-item')}>
      <div className={cx('check-box')}>
        <input type='checkbox' />
      </div>
      <div className={cx('deco-box')}>
        <div className={cx('box-top')}>
          <span className={cx('title')}>{title}</span>
          <span className={cx('date')}>{date}</span>
        </div>
      <div className={cx('contents')}>{contents}</div>
      </div>
    </div>
  )
}

let MemoItems = [<MemoItem />,<MemoItem />,<MemoItem />,<MemoItem />,<MemoItem />,<MemoItem />,]

const MemoListBox = () => {
  return (
    <div>
      <ControlBox />
      {MemoItems.map(item => item)}
      <MemoItem />
      <MemoItem />
      <MemoItem />
      <MemoItem />
      <MemoItem />
    </div>
  );
};

export default MemoListBox;