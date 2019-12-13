import React from 'react';

import Service from '../service';
import NavRouter from '../../../components/navRoutes';
import About from "../../../components/about";
//import Info from '../../../components/info';
//import Documents from '../../../components/documents';
import CostsAndFeesList from '../../../components/costsAndFeesList';
//import Roadmap from '../../../components/roadmap';

import useFetch from '../../../utils/useFetch';

const Claim = () => {
  const data = useFetch('claims');

  return (
    <Service>
      <NavRouter currentNavName={data && data.h2} />
      <About data={data} imgName='claim' />
      {/* <Info>
        <div>{data && data.info}</div>
      </Info> */}
      {/* <Documents data={data} /> */}
      <CostsAndFeesList data={data} />
      {/* <Roadmap data={data} /> */}
    </Service>
  )
}

export default Claim;
