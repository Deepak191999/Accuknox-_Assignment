import React from 'react'
import './SpecificAlert.css'
import NoGraphData from '../../images/noGraphData.png'

const SpecificAlert = () => {
  return (
    <div className="widget">
    <h3>Top 5 Namespace specific alert</h3>

    <div className="widget-content">
       <img src={NoGraphData} style={{width:'400px'}} alt="noGraph" />
        </div>
    </div>

  )
}

export default SpecificAlert
