import React from 'react';

import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';

import s from './styles.module.scss';

const Form = () => {
  const data = {
    html: '<h1>no localhost</h1>'
  }
  const send = async () => {
    console.log('sending');
    const response = await fetch('http://cms.femidamurino.ru/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    console.log(response);
  }
  return (
    <div>
      <form>
        <Input className={s.input} label='Имя*' img='user' type='text' name='name' />
        <Input className={s.input} label='Email*' img='email' type='text' name='email' />
        <Input className={s.input} label='Номер телефона*' img='phone' type='text' name='phone' />
        <Input className={s.input} label='Тема сообщения' type='text' name='thame' />
        <Textarea rows={6} className={s.textarea} label='Сообщение' type='text' name='thame' />
      </form>
      <div className={s.buttonWrapper}>
        <Button onClick={() => send()} className={s.btnCustom}>
          Отправить
        </Button>
        <div className={s.text}>Даю согласие на обработку персональных данных</div>
      </div>
    </div>
  )
};

export default Form;
