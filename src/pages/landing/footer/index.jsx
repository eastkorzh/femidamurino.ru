import React from 'react';

import Input from '../../../components/ui/Input';
import Textarea from '../../../components/ui/Textarea';
import Button from '../../../components/ui/Button';

import s from './styles.module.scss';

const Footer = () => {
  return (
    <footer id="contacts" className={s.footer}>
      <h2>Наши контакты</h2>

      <div className={s.iconsWrapper}>
        <div className={s.item}>
          <img src={require('../../../img/icons/building.svg')} alt=""/>
          <div className={s.item}>
            <img src={require('../../../img/metro.svg')} alt=""/>
            Девяткино, ул. Вокзальная 17А,<br /> 2 этаж
          </div>
        </div>
        <div className={s.item}>
          <img src={require('../../../img/icons/phone.svg')} alt=""/>
          <div className={s.item}>
            +7 (903) 093-00-93
          </div>
        </div>
        <a 
          href='https://vk.com/femidamurino'  
          rel="noopener noreferrer"
          target='_blank' 
          className={s.item}
        >
          <img src={require('../../../img/icons/vk.svg')} alt=""/>
          <div className={s.item}>
            https://vk.com/<br />femidamurino
          </div>
        </a>
        <a href="mailto:nasim.nurullaev@yandex.ru" className={s.item}>
          <img src={require('../../../img/icons/email.svg')} alt=""/>
          <div className={s.item}>
            nasim.nurullaev@yandex.ru
          </div>
        </a>
      </div>

      <div className={s.info}>
        <div className={s.left}>
          <div className={s.h}>Бесплатная консультация</div>
          <form>
            <Input className={s.input} label='Имя*' img='user' type='text' name='name' />
            <Input className={s.input} label='Email*' img='email' type='text' name='email' />
            <Input className={s.input} label='Номер телефона*' img='phone' type='text' name='phone' />
            <Input className={s.input} label='Тема сообщения' type='text' name='thame' />
            <Textarea rows={6} className={s.textarea} label='Сообщение' type='text' name='thame' />
          </form>
          <div className={s.buttonWrapper}>
            <Button className={s.btnCustom}>
              Отправить
            </Button>
            <div className={s.text}>Даю согласие на обработку персональных данных</div>
          </div>
        </div>
        <div className={s.right}>
          <div>Мы здесь:</div>
          <div>ПН-ВС 10:00-19:00</div>
          <iframe 
            title='map' 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A856bdd75a5c59a79a6d5e684ca98c267a31278b4b460127feb3df6b453390917&amp;source=constructor" 
            width="100%" height="310" frameBorder="0"
          />
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.content}>
          <div>© Юридический центр “Фемида”, 2019</div>
          <div>Создание сайтов</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
