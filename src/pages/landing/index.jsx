import React, { useEffect } from 'react';

import Header from './header';
import Services from './services';
import Advantages from './advantages';
import FAQ from './FAQ';
import Footer from './footer';

import history from '../../history';
import useFetch from '../../utils/useFetch';

const Landing = () => {
  const data = useFetch('landings');

  useEffect(() => {
    const state = history.location.state;
    
    if (state && state.scrollTo) {
      document.getElementById(state.scrollTo).scrollIntoView();
    }
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
