

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ImageRiskAssessment = () => {
  return (
    <div className="widget">
      <h3>Top 5 Namespace Specific Alerts</h3>
      
      <div className="container">
        <div className="progress">
          <div className="progress-bar bg-success" role="progressbar" style={{ width: '40%' }}>
            Critical
          </div>
          <div className="progress-bar bg-warning" role="progressbar" style={{ width: '30%' }}>
            High
          </div>
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }}>
            Moderate
          </div>
          <div className="progress-bar bg-info" role="progressbar" style={{ width: '10%' }}>
            Low
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageRiskAssessment;
