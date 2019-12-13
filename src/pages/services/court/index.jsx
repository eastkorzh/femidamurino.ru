import React from 'react';

import Service from '../service';
import NavRouter from '../../../components/navRoutes';
import About from "../../../components/about";
import Info from '../../../components/info';
//import Documents from '../../../components/documents';
import CostsAndFeesList from '../../../components/costsAndFeesList';
import Roadmap from '../../../components/roadmap';

import useFetch from '../../../utils/useFetch';

const Court = () => {
  const data = useFetch('courts');

  return (
    <Service>
      <NavRouter currentNavName={data && data.h2} />
      <About data={data} imgName='representation' />
      <Info>
        <div>{data && data.info}</div>
      </Info>
      {/* <Documents data={data} /> */}
      {data &&
        <Roadmap h3={data.h3_1} stepsList={data.stepsList1} />
      }
      {data &&
        <Roadmap h3={data.h3_2} stepsList={data.stepsList2} />
      }
      <CostsAndFeesList data={data} />
    </Service>
  )
}

export default Court;
