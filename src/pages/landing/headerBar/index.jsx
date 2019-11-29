import React, { useState } from 'react';

import s from './styles.module.scss';

const HeaderBar = () => {
  const [ isOpen, setOpen ] = useState(false);

  return (
    <div className={s.headerBar}>
      <div className={s.content}>
        <div className={s.logo}>
          <div className={s.imgWrapper}>
            <img src={require('../../../img/logo.png')} alt=""/>
          </div>
          <div className={s.text}>
            <p>Юридический</p>
            <p>центр</p>
            <p>«Фемида»</p>
          </div>
        </div>

        <div className={s.info}>
          <div className={s.top}>
            <div className={s.item}>
              <img src={require('../../../img/metro.svg')} alt=""/>
              <div>Девяткино, ул. Вокзальная 17А, 2 этаж</div>
            </div>
            <div className={s.item}>
              ПН - ВС 10:00 - 19:00
            </div>
            <div className={s.item}>
              +7 (903) 093-00-93
            </div>
          </div>
          <nav>
            <a href="#services">Услуги</a>
            <a href="#advandages">Приемущества</a>
            <a href="#faq">Вопрос-ответ</a>
            <a href="#contacts">Контакты</a>
          </nav>        
        </div>
        <div onClick={() => setOpen(true)} className={s.burger}>
          <img src={require('../../../img/burger.svg')} alt=""/>
        </div>
        
        {isOpen &&
          <div className={s.modal}>
            <div className={s.content}>
              <div>+7 (903) 093-00-93</div>
              <nav onClick={() => setOpen(false)}>
                <a href="#services">Услуги</a>
                <a href="#advandages">Приемущества</a>
                <a href="#faq">Вопрос-ответ</a>
                <a href="#contacts">Контакты</a>
              </nav>     
              <div onClick={() => setOpen(false)} className={s.close}>
                <img src={require('../../../img/close.svg')} alt=""/>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
};

export default HeaderBar;
