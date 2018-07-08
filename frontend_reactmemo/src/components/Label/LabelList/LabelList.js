import React from 'react';
import styles from './LabelList.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const LabelItem = ({
  labelName = 'label',
  amount = 0,
  checkbox = 'checkbox'
}) => {
  return (
    <div className={cx('label')}>
      <span>
        <input type={checkbox}/>
      </span>
      <span className={cx('deco-box')}>
        <span>{labelName}</span>
        <span>({amount})</span>
      </span>
    </div>
  )
}

const AddLabel = () => {
  return(
    <div>
      <button className={cx('button-add')}>
        Add
      </button>
      <button className={cx('button-add')}>
        Del
      </button>
    </div>
  )
}

let LabelItems = [<LabelItem />,<LabelItem />,<LabelItem />,<LabelItem />,<LabelItem />]

const LabelList = () => {
  return (
    <div className={cx('label-list')}>
      <LabelItem labelName={'All'} amount={'amount'} checkbox='hidden'/>
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