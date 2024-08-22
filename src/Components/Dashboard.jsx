import React, { useState } from 'react';
import './Dashboard.css';
import CloudAccountsWidget from './CloudAccountsWidget/CloudAccountsWidget';
import CloudAccountRiskWidget from './CloudAccountRiskWidget/CloudAccountRiskWidget';
import AddWidgetModal from './AddWidgetModal/AddWidgetModal';

const Dashboard = () => {
    const [widgets, setWidgets] = useState([
        { id: 1, name: 'Cloud Accounts', component: <CloudAccountsWidget name="Cloud Accounts" /> },
        { id: 2, name: 'Cloud Account Risk Assessment', component: <CloudAccountRiskWidget /> },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddWidget = (widget) => {
        setWidgets([
            ...widgets,
            {
                id: widgets.length + 1,
                name: widget.name,
                component: <CloudAccountsWidget name={widget.name} />,
            },
        ]);
    };

    const handleDeleteWidget = (id) => {
        setWidgets(widgets.filter(widget => widget.id !== id));
    };

    return (
        <div className="dashboard">
            <header>
                <h1>CNAPP Dashboard</h1>
            </header>
            <section className="widgets">
                {widgets.map(widget => (
                    <div key={widget.id} className="widget-container">
                        <div className="widget-header">
                            {widget.component}
                            <span className="delete-button" onClick={() => handleDeleteWidget(widget.id)}>  ✖️</span>
                        </div>
                    </div>
                ))}
                <div className="widget-container add-widget" onClick={() => setIsModalOpen(true)}>
                    <div className="add-icon">+ Add Widget</div>
                </div>
            </section>
            <AddWidgetModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddWidget={handleAddWidget}
            />
        </div>
    );
};

export default Dashboard;
