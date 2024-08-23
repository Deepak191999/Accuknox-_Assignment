import React from 'react'
import './CloudAccountRiskWidget.css'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
ChartJS.register(ArcElement, Tooltip, Legend);


const CloudAccountRiskWidget = () => {
    const data = {
        labels: ['Failed', 'Warning', 'Not Available', 'Passed'],
        datasets: [
            {
                data: [1689, 681, 36, 7253],
                backgroundColor: ['#FF6384', '#FFCE56', '#C9CBCF', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#FFCE56', '#C9CBCF', '#36A2EB'],
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                display: false,
               
            },
            
        },
        maintainAspectRatio: false, 
    };

    return (
        <div className="widget">
            <h3>Cloud Account Risk Assessment</h3>

            <div className="widget-content">
                <div className="chart-container">
                    <Doughnut data={data} options={options} />
                </div>
                <div className="custom-legend">
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#FF6384' }}></span>
                        Failed (1689)
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#FFCE56' }}></span>
                        Warning (681)
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#C9CBCF' }}></span>
                        Not available (36)
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#36A2EB' }}></span>
                        Passed (7253)
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CloudAccountRiskWidget