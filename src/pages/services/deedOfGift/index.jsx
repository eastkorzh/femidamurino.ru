import React, { useState, useEffect } from 'react';

import HeaderBar from '../../landing/headerBar';
import NavRouter from '../../../components/navRoutes';
import About from "../../../components/about";
import Info from '../../../components/info';
import Documents from '../../../components/documents';
import CostsAndFeesList from '../../../components/costsAndFeesList';
import Roadmap from '../../../components/roadmap';

import s from './styles.module.scss';
import url from '../../../urls';

const DeedOfGift = () => {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    const get = async (url) => {
      const response = await fetch(url)
      const obj = await response.json();

      return obj;
    }

    get(url+'deedofgifts').then(r => setData(r[0]))
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
        <About data={data} imgName='newContract' />
        <Info>
          <div>{data && data.info}</div>
        </Info>
        <Documents data={data} />
        <CostsAndFeesList data={data} />
        <Roadmap data={data} />
      </div>
    </div>
  )
}

export default DeedOfGift;
