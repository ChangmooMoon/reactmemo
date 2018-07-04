import React from 'react';
import styles from './Example.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Example = ({example = f => f}) => {
  return (
    <div>

    </div>
  );
};

Example.propTypes = {}

// Example.propTypes = {
//   example : f => f
// }


export default Example;