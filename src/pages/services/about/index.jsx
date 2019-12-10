import React from 'react';

import s from './styles.module.scss';

const About = (props) => {
  const { data, imgName } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.left}>
          <h2>{data && data.h2}</h2>
          <div className={s.paragraph}>{data && data.p}</div>
          <div className={s.navIcons}>
            <div className={s.item}>
              <img src={require('../../../img/icons/ruble.svg')} alt=""/>
              <div>Стоимость услуг</div>
            </div>
            <div className={s.item}>
              <img src={require('../../../img/icons/blanks.png')} alt=""/>
              <div>Стоимость услуг</div>
            </div>
          </div>
        </div>
        <div className={s.img}>
          <img src={require(`../../../img/icons/${imgName}.png`)} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default About;
