import React from 'react';
import styles from './LabelList.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const LabelItem = ({
  labelName = 'label',
  amount = 0
}) => {
  return(
    <div className={cx('label')}>
      <span>{labelName}</span>
      <span>({amount})</span>
    </div>
  )
}

const AddLabel = () => {
  return(
    <button className={cx('button-add')}>
      +label
    </button>
  )
}

let LabelItems = [<LabelItem />,<LabelItem />,<LabelItem />,<LabelItem />,<LabelItem />]

const LabelList = () => {
  return (
    <div className={cx('label-list')}>
      <LabelItem labelName={'all'} amount={'amount'} />
      {LabelItems.map(item => item)}
      <LabelItem />
      <LabelItem />
      <LabelItem />
      <LabelItem />
      <LabelItem />
      <LabelItem />
      <LabelItem />
      <LabelItem />
      <AddLabel />
    </div>
  );
};

export default LabelList;