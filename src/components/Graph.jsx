import React from 'react'
import GraphFooter from './../helper/GraphFooter';
import graph from '../assets/omega-graph.png';

const Graph = () => {
  return (
    <section>
        <div className='bg-[#EBF6FF] py-8 text-center'>
            <h2 className='text-[42px] py-4 leading-[54px]'>Setting New Care Standards</h2>
            <p className='text-xl pb-4 leading-8'>How much does AI-Imaging with FluoroShield™ reduce radiation exposure? Include table</p>
            <img src={graph} className='w-[90%] mx-auto my-4' alt="" />
        </div>
      <GraphFooter/>
    </section>
  )
}

export default Graph
