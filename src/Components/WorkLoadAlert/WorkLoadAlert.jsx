import React from 'react'
// import './SpecificAlert.css'
import '../SpecificAlert/SpecificAlert.css'

import NoGraphData from '../../images/noGraphData.png'
const WorkLoadAlert = () => {
  
    return (
        <div className="widget">
        <h3>Workload alert</h3>
    
        <div className="widget-content">
           <img src={NoGraphData} style={{width:'400px'}} alt="noGraph" />
            </div>
        </div>
    

  )
}

export default WorkLoadAlert