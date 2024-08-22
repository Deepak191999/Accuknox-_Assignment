


import React from 'react';

const ImageSecurityIssue = () => {
  return (
    <div className="widget">
      <h3>Image Security Issues</h3>
      
      <div className="container">
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: '20%', backgroundColor: '#8B0000' }}>
         
          </div>
          <div className="progress-bar" role="progressbar" style={{ width: '20%', backgroundColor: '#f01515' }}>
            
          </div>
          <div className="progress-bar" role="progressbar" style={{ width: '20%', backgroundColor: '#ff9c32' }}>
            
          </div>
          <div className="progress-bar" role="progressbar" style={{ width: '20%', backgroundColor: '#fff820' }}>
            
          </div>
          <div className="progress-bar" role="progressbar" style={{ width: '20%', backgroundColor: '#d3d3d3' }}>
            
          </div>
        </div>

       
<div className="legend" style={{ display: 'flex',flexWrap:'wrap', justifyContent: 'space-between', marginTop: '10px' }}>
          <div className="legend-item" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '15px', height: '15px', backgroundColor: '#8B0000', marginRight: '5px' }}></div>
            Critical (2)
          </div>
          <div className="legend-item" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '15px', height: '15px', backgroundColor: '#f01515', marginRight: '5px' }}></div>
            High (2)
          </div>
          <div className="legend-item" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '15px', height: '15px', backgroundColor: '#ff9c32', marginRight: '5px' }}></div>
            Moderate (2)
          </div>
          <div className="legend-item" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '15px', height: '15px', backgroundColor: '#fff820', marginRight: '5px' }}></div>
            Low (2)
          </div>
          <div className="legend-item" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '15px', height: '15px', backgroundColor: '#d3d3d3', marginRight: '5px' }}></div>
            None (2)
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSecurityIssue;
