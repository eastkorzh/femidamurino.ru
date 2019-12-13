import React from 'react';

import Service from '../service';
import NavRouter from '../../../components/navRoutes';
import About from "../../../components/about";
import Info from '../../../components/info';
import Documents from '../../../components/documents';
import CostsAndFeesList from '../../../components/costsAndFeesList';
import Roadmap from '../../../components/roadmap';

import useFetch from '../../../utils/useFetch';

const DeedOfGift = () => {
  const data = useFetch('deedofgifts');

  return (
    <Service>
      <NavRouter currentNavName={data && data.h2} />
      <About data={data} imgName='newContract' />
      <Info>
      <div dangerouslySetInnerHTML={{ __html: (data && data.info)}} />
      </Info>
      <Documents data={data} />
      <CostsAndFeesList data={data} />
      {data &&
        <Roadmap h3={data.h3} stepsList={data.stepsList} />
      }
    </Service>
  )
}

export default DeedOfGift;
