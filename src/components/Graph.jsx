import React from 'react'
import GraphFooter from './../helper/GraphFooter';
import PatientRadiationChart from '../helper/PatientRadiationChart';

const Graph = () => {
  return (
    <section>
        
        <PatientRadiationChart/>
      <GraphFooter/>
    </section>
  )
}

export default Graph
