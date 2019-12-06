import React from 'react';
import cx from 'classnames';

import s from './styles.module.scss';

const Button = (props) => {
  const { className, onClick } = props;

  return (
    <button onClick={onClick} className={cx({[s.btn]: true, [className]: className !== undefined})}>
      {props.children}
    </button>
  )
}

export default Button;
