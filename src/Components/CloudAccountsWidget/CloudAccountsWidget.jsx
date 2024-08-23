import React from 'react'
import './CloudAccountsWidget.css'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend);


const CloudAccountsWidget = ({name}) => {
    const data = {
        labels: ['Not Connected', 'Connected'],
        datasets: [{
            data: [2, 2],
            backgroundColor: ['#c1bdbd', '#36A2EB'],
        }],
    };
    const options = {
                plugins: {
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                        },
                    },
                   
                },
                maintainAspectRatio: false, // Prevents distortion of the chart
            };

    return (
        <div className="widget">
             {/* <button className="delete-button" onClick={onDelete}>✕</button> */}
            {/* <h3> {name}  </h3> */}
            <h3>  Cloud Accounts</h3>
            <div className="widget-content">
                <div className="chart-container">
                    <Doughnut data={data} options={options} />
                </div>
                <div className="custom-legend">
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#c1bdbd' }}></span>
                        Not Connected (2)
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#36A2EB' }}></span>
                        Connected (2)
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CloudAccountsWidget