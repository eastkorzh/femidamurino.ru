import React, { useState, useEffect } from 'react';

import HeaderBar from '../../landing/headerBar';
import NavRouter from '../../../components/navRoutes';
import About from "../../../components/about";
import Info from '../../../components/info';
//import Documents from '../../../components/documents';
import CostsAndFeesList from '../../../components/costsAndFeesList';
import Roadmap from '../../../components/roadmap';
import ServiceForm from '../../../components/serviceForm';
import FooterBar from '../../../components/footerBar';

import s from './styles.module.scss';
import url from '../../../urls';

const RegisterAndliquidation = () => {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    const get = async (url) => {
      const response = await fetch(url)
      const obj = await response.json();

      return obj;
    }

    get(url+'registerandliquidations').then(r => setData(r[0]))
  }, [])

  return (
    <div className={s.container}>
      <div className={s.headerBarWrapper}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <HeaderBar fixed={true} />
        </div>
      </div>
      <div className={s.content}>
        <NavRouter currentNavName={data && data.h2} />
        <About data={data} imgName='claim' />
        <Info>
          <div>{data && data.info1}</div>
        </Info>
        <Info style={{marginTop: '40px'}}>
          <div>{data && data.info2}</div>
        </Info>
        <CostsAndFeesList data={data} />
        <Roadmap data={data} />
        <ServiceForm />
      </div>
      <FooterBar />
    </div>
  )
}

export default RegisterAndliquidation;
