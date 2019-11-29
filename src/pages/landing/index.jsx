import React from 'react';

import HeaderBar from './headerBar';
import Button from '../../components/ui/Button';
import s from './styles.module.scss';

const Landing = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <HeaderBar />
        <div className={s.content}>
          <div className={s.left}>
            <h1>Профессиональные юристы Мурино</h1>
            <h2>Правда на нашей стороне</h2>
            <Button className={s.btnWrapper}>
              Бесплатная консультация
            </Button>
          </div>
          <div className={s.right}>
            <img src={require('../../img/femida.png')} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Landing;
