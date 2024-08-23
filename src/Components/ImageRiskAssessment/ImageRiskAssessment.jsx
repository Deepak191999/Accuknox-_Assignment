

import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../SpecificAlert/SpecificAlert.css'

const ImageRiskAssessment = () => {
  return (
    <div className="widget">
      <h3>Image Risk Assessment</h3>
      
      <div className="container">
        <div className="progress">
        
          <div className="progress-bar" role="progressbar" style={{ width: '6%', backgroundColor: '#f01515' }}>
            
          </div>
          <div className="progress-bar" role="progressbar" style={{ width: '72%', backgroundColor: '#ff9c32' }}>
            
          </div>
          <div className="progress-bar" role="progressbar" style={{ width: '17.5%', backgroundColor: '#fff820' }}>
            
          </div>
          <div className="progress-bar" role="progressbar" style={{ width: '4.5%', backgroundColor: '#d3d3d3' }}>
            
          </div>
        </div>

       
<div className="legend" style={{ display: 'flex',flexWrap:'wrap', justifyContent: 'space-between', marginTop: '10px' }}>
          <div className="legend-item" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '15px', height: '15px', backgroundColor: '#f01515', marginRight: '5px' }}></div>
            Critical (9)
          </div>
          <div className="legend-item" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '15px', height: '15px', backgroundColor: '#ff9c32', marginRight: '5px' }}></div>
            High (150)
          </div>
          <div className="legend-item" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '15px', height: '15px', backgroundColor: '#fff820', marginRight: '5px' }}></div>
            Moderate (35)
          </div>
          
          <div className="legend-item" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '15px', height: '15px', backgroundColor: '#d3d3d3', marginRight: '5px' }}></div>
            None (4)
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageRiskAssessment;
