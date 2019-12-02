import React from 'react';

import s from './styles.module.scss';

const Advantages = () => {
  return (
    <section id="advantages" className={s.section}>
      <img className={s.timer} src={require('../../../img/timer.svg')} alt=""/>
      <div className={s.container}>
        <div className={s.text}>
          <h2>Быстрее некуда</h2>
          <div>Мы расположены в одном здании с МФЦ</div>
          <div>Бюрократия знамает буквально минуты</div>
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
