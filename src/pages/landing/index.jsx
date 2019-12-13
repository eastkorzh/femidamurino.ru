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
      const top = document.getElementById(state.scrollTo).offsetTop;
      window.scrollTo({ top: top - 50, behavior: 'instant'})
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
