import React, { useState, useEffect } from 'react';

import HeaderBar from './headerBar';
import Services from './services';
import Advantages from './advantages';
import FAQ from './FAQ';
import Footer from './footer';
import Button from '../../components/ui/Button';
import s from './styles.module.scss';

import throttle from './throttle';
import url from '../../urls';

const Landing = () => {
  const [ isNear, setNear ] = useState(true);
  const [ data, setData ] = useState(null);

  useEffect(() => {
    const throttledHandleScroll = throttle(() => {
      if (window.pageYOffset + 200 > document.documentElement.clientHeight) {
        if (isNear === true) setNear(false);
      } else {
        if (isNear === false) setNear(true);
      }
    }, 300);

    window.addEventListener('scroll', throttledHandleScroll);
  })

  useEffect(() => {
    const get = async (url) => {
      const response = await fetch(url)
      const obj = await response.json();

      return obj;
    }

    get(url+'landings').then(r => setData(r[0]))
  }, [])

  return (
    <>
    <header className={s.header}>
      <div className={s.container}>
        <HeaderBar data={data} />
        {!isNear &&
          <div className={s.fixedMenu}>
            <HeaderBar data={data} fixed={true}/>
          </div>
        }
        <div className={s.content}>
          <div className={s.left}>
            <h1>{data && data.h1}</h1>
            <h2>{data && data.h2}</h2>
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
    <Services />
    <Advantages data={data} />
    <FAQ data={data} />
    <Footer data={data} />
    </>
  )
}

export default Landing;
