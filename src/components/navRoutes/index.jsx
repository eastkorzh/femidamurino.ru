import React from 'react';
import { Link } from 'react-router-dom';

import s from './styles.module.scss';

const NavRoutes = (props) => {
  const { currentNavName } = props;
  return (
    <div className={s.container}>
      <Link to='/#services'>Услуги</Link>
      <div>/</div>
      <div>{currentNavName}</div>
    </div>
  )
}

export default NavRoutes;
