import React from 'react'
import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Graph from '../components/Graph';
import TruBlock from '../components/TruBlock';
import LatestArticles from '../components/LatestArticles';
import RadiationExposur from '../components/RadiationExposur';
import Integration from '../components/Integration';
import BeforeAfter from '../helper/BeforeAfter';

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RadiationExposur/>
      <BeforeAfter/>
      <TruBlock/>
      <Integration/>
      <Graph/>
      <LatestArticles/>
      <Footer/>
    </div>
  )
}

export default LandingPage
