import React from 'react';
import styles from './LabelList.scss'
import classNames from 'classnames/bind'

import AddCircle from 'static/AddCircle'
import Bin from 'static/Bin'

const cx = classNames.bind(styles)

const LabelItem = ({
  labelName = 'label',
  amount = 0,
}) => {
  return (
    <div className={cx('label')} draggable='true'>
      <span className={cx('deco-box')}>
        <span>{labelName}</span>
        <span>({amount})</span>
      </span>
    </div>
  )
}

const AddLabel = () => {
  return(
    <span className={cx('button')}>
      <AddCircle />
    </span>
  )
}

const DeleteLabel = () => {
  return (
    <span className={cx('button')}>
      <Bin />
    </span>
  )
}

const ControlBox = () => {
  return (
    <div className={cx('control-box')}>
      <AddLabel />
      <DeleteLabel />
    </div>
  )
}

let LabelItems = [<LabelItem />,<LabelItem />,<LabelItem />,<LabelItem />,<LabelItem />]

const LabelList = () => {
  return (
    <div className={cx('label-list')}>
      <LabelItem labelName={'All'} />
      {LabelItems.map(item => item)}
      <AddLabel />
    </div>
  );
};

export default LabelList;