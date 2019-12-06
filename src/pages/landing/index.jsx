import React, { useState, useEffect } from 'react';

import Header from './header';
import Services from './services';
import Advantages from './advantages';
import FAQ from './FAQ';
import Footer from './footer';

import url from '../../urls';

const Landing = () => {
  const [ data, setData ] = useState(null);

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
    <Header data={data}/>
    <Services />
    <Advantages data={data} />
    <FAQ data={data} />
    <Footer data={data} />
    </>
  )
}

export default Landing;
