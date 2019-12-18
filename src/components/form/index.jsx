import React, { useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import { useProximityFeedback } from 'react-proximity-feedback';

import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';

import s from './styles.module.scss';

const Form = (props) => {
  const { setSuccess } = props;

  const [ data, setData ] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [ isValid, setValid ] = useState({
    name: false,
    email: false,
    phone: false,
    subject: true,
    message: true,
  });

  const [ submitClicked, setSubmitClicked ] = useState(false);

  const { ref, proximity } = useProximityFeedback({ threshold: 200, throttleInMs: 50})

  const handleChange = (e) => {
    if (submitClicked === true) setSubmitClicked(false);

    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
    
    if (e.target.name === 'name') {
      setValid({
        ...isValid,
        name: e.target.value.length > 1,
      })
    }

    if (e.target.name === 'email') {
      setValid({
        ...isValid,
        email: isEmail(e.target.value)
      })
    }

    if (e.target.name === 'phone') {
      setValid({
        ...isValid,
        phone: isMobilePhone(e.target.value)
      })
    }
  }

  const send = async () => {
    setSubmitClicked(true);

    let allValid = true;

    for (let item in isValid) {
      if (isValid[item] === false) {
        allValid = false;
        break;
      }
    }

    if (!allValid) return;

    const response = await fetch('http://cms.femidamurino.ru/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: data.subject || '',
        html: `
        <div>
          <h1>Бесплатная консультация</h1>
          <div>Имя: ${data.name}</div>
          <div>Почта: ${data.email}</div>
          <div>Телефон: ${data.phone}</div>
          <div>Сообщение: ${data.message}</div>
        </div>
        `
      })
    })
    
    if (response && setSuccess) setSuccess(true);
  }


  return (
    <div>
      <form>
        <Input 
          handleChange={handleChange} 
          className={s.input} 
          isValid={isValid.name} 
          proximity={proximity} 
          submitClicked={submitClicked}
          label='Имя*' img='user' type='text' name='name' 
        />
        <Input 
          handleChange={handleChange} 
          className={s.input} 
          isValid={isValid.email} 
          proximity={proximity} 
          submitClicked={submitClicked}
          label='Email*' img='email' type='text' name='email' 
        />
        <Input 
          handleChange={handleChange} 
          className={s.input} 
          isValid={isValid.phone} 
          proximity={proximity} 
          submitClicked={submitClicked}
          label='Номер телефона*' img='phone' type='text' name='phone'
        />
        <Input 
          handleChange={handleChange} 
          className={s.input} 
          isValid={isValid.subject} 
          proximity={proximity} 
          submitClicked={submitClicked}
          label='Тема сообщения' type='text' name='subject' 
        />
        <Textarea 
          handleChange={handleChange} 
          rows={6} 
          className={s.textarea} 
          isValid={isValid.message} 
          proximity={proximity} 
          submitClicked={submitClicked}
          label='Сообщение' type='text' name='message' 
        />
      </form>
      <div className={s.buttonWrapper}>
        <Button forwardRef={ref} onClick={() => send()} className={s.btnCustom}>
          Отправить
        </Button>
        <div className={s.text}>Даю согласие на обработку персональных данных</div>
      </div>
    </div>
  )
};

export default Form;
