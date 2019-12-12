import React, { useState, useEffect } from 'react';

import Service from '../service';
import NavRouter from '../../../components/navRoutes';
import About from "../../../components/about";
import Info from '../../../components/info';
//import Documents from '../../../components/documents';
import CostsAndFeesList from '../../../components/costsAndFeesList';
import Roadmap from '../../../components/roadmap';

import url from '../../../urls';

const Ndfl = () => {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    const get = async (url) => {
      const response = await fetch(url)
      const obj = await response.json();

      return obj;
    }

    get(url+'ndfls').then(r => setData(r[0]))
  }, [])

  return (
    <Service>
      <NavRouter currentNavName={data && data.h2} />
      <About data={data} imgName='3ndfl' />
      <Info>
        <div>{data && data.info}</div>
      </Info>
      {/* <Documents data={data} /> */}
      <CostsAndFeesList data={data} />
      {data &&
        <Roadmap h3={data.h3} stepsList={data.stepsList} />
      }
    </Service>
  )
}

export default Ndfl;
