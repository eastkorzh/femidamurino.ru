import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import s from './styles.module.scss';


const HeaderBar = (props) => {
  const { data } = props;

  const [ isOpen, setOpen ] = useState(false);

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { 
      opacity: 1,
    },
    entered: { 
      opacity: 1,
    },
  };

  return (
    <div className={s.headerBar}>
      <div style={props.fixed ? {padding: 0} : {}} className={s.content} >
        <div className={s.logo} >
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
              <div>{data && data.address}</div>
            </div>
            <div className={s.item}>
              ПН - ВС 10:00 - 19:00
            </div>
            <a href={`tel:${data && data.phone}`} className={s.item}>
              {data && data.phone}
            </a>
          </div>
          <nav>
            <a href="#services">Услуги</a>
            <a href="#advantages">Приемущества</a>
            <a href="#faq">Вопрос-ответ</a>
            <a href="#contacts">Контакты</a>
          </nav>        
        </div>
        <a href={`tel:${data && data.phone}`} className={s.phone}>
          {data && data.phone}
        </a>
        <div onClick={() => setOpen(true)} className={s.burger}>
          <img src={require('../../../img/burger.svg')} alt=""/>
        </div>

        <Transition 
          in={isOpen} 
          onEnter={node => node.offsetHeight} 
          timeout={duration} 
          mountOnEnter={true} 
          unmountOnExit={true} 
        >
          {state => {
            return(
            <div 
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
              className={s.modal}
            >
              <div className={s.content}>
                <a href={`tel:${data && data.phone}`}>
                  {data && data.phone}
                </a>
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
          )}}
        </Transition>
      </div>
    </div>
  )
};

export default HeaderBar;
