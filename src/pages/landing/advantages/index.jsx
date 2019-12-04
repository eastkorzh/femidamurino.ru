import React from 'react';

import s from './styles.module.scss';

const Advantages = (props) => {
  const { data } = props;
  return (
    <section id="advantages" className={s.section}>
      <img className={s.timer} src={require('../../../img/timer.svg')} alt=""/>
      <div className={s.container}>
        <div className={s.text}>
          <h2>{data && data.advantagesH2}</h2>
          <div>{data && data.advantagesP1}</div>
          <div>{data && data.advantagesP2}</div>
        </div>
        <div className={s.imgWrapper}>
          <img src={require('../../../img/building.png')} alt=""/>
        </div>
      </div>
      <div className={s.ground} />
    </section>
  )
}

export default Advantages;
