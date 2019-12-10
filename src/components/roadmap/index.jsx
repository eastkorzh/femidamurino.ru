import React from 'react';

import s from './styles.module.scss';

const Roadmap = (props) => {
  const { data } = props;

  return (
    <div className={s.container}>
      <h3>{(data && data.h3) && data.h3}</h3>
      <div className={s.steps}>
        {(data && data.stepsList) && data.stepsList.map((item, index) => {
          return (
            <div key={index} className={s.step}>
              <img src={require('../../img/icons/success.svg')} alt=""/>
              <div className={s.text}>{item.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Roadmap;
