import React, { useEffect } from 'react';

import HeaderBar from '../landing/headerBar';
import ServiceForm from '../../components/serviceForm';
import FooterBar from '../../components/footerBar';

import s from './styles.module.scss';
import history from '../../history';

const Service = (props) => {
  const { children } = props;

  useEffect(() => {
    if (history.action === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }, [])

  return (
  <div className={s.container}>
    <div className={s.headerBarWrapper}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <HeaderBar fixed={true} />
      </div>
    </div>
    <div className={s.content}>
      {children}
      <ServiceForm />
    </div>
    <FooterBar />
  </div>
  )
}

export default Service;
