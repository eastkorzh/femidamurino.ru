import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Input from '../../../components/ui/Input';
import Textarea from '../../../components/ui/Textarea';
import Button from '../../../components/ui/Button';
import FooterBar from '../../../components/footerBar';

import s from './styles.module.scss';

const Footer = (props) => {
  const { data } = props;

  return (
    <footer id="contacts" className={s.footer}>
      <h2>Наши контакты</h2>

      <div className={s.iconsWrapper}>
        <div className={s.item}>
          <img src={require('../../../img/icons/building.svg')} alt=""/>
          <div className={s.item}>
            {data && data.address.split(',').map((item, index, arr) => (
              <React.Fragment key={index}>
              {(index === 0) ? 
                <div style={{displya: 'flex', alignItems: 'center'}}>
                  <img src={require('../../../img/metro.svg')} alt=""/>
                  <div>{item+','}</div>
                </div> :
                <>
                {(arr.length - index === 1) ? 
                  <div>{item}</div> : 
                  <div>{item+','}</div>}
                </>
              }
              </React.Fragment>
            ))}
          </div>
        </div>
        <a className={s.item} href={`tel:${data && data.phone}`}>
          <img src={require('../../../img/icons/phone.svg')} alt=""/>
          <div>
            {data && data.phone}
          </div>
        </a>
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
        <a href={`mailto:${data && data.email}`} className={s.item}>
          <img src={require('../../../img/icons/email.svg')} alt=""/>
          <div className={s.item}>
          {data && data.email}
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
            <YMaps>
              <div style={{borderRadius: '7px', overflow: 'hidden'}}>
                <Map
                  style={{
                    width: '100%',
                    height: '310px',
                  }}
                  defaultState={{
                    center: [60.04894, 30.443461],
                    zoom: 17,
                  }}
                >
                  <Placemark geometry={[60.048490, 30.443727]} />
                </Map>
              </div>
            </YMaps>
        </div>
      </div>
      <FooterBar />
    </footer>
  )
}

export default Footer;
