//working
import React, { useState } from 'react';
import './Dashboard2.css'; // Ensure this path is correct
import CloudAccountsWidget from './CloudAccountsWidget/CloudAccountsWidget';
import CloudAccountRiskWidget from './CloudAccountRiskWidget/CloudAccountRiskWidget';
import WidgetSelectionModal from './WidgetSelectionModal/WidgetSelectionModal';

const Dashboard = () => {
    const [widgets, setWidgets] = useState([ { id: 1, name: 'Cloud Accounts', component: <CloudAccountsWidget /> },
                { id: 2, name: 'Cloud Account Risk Assessment', component: <CloudAccountRiskWidget /> }]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('CSPM');

    const handleAddWidget = (newWidgets) => {
                setWidgets((prevWidgets) => {
                    const updatedWidgets = prevWidgets.filter(widget =>
                        newWidgets.some(newWidget => newWidget.id === widget.id)
                    );
                    return [...updatedWidgets, ...newWidgets];
                });
            };
        
            const renderWidgets = (category) => {
                return widgets
                    .filter(widget => widget.category === category)
                    .map(widget => (
                        <div key={widget.id} className="widget-container">
                            {widget.component}
                        </div>
                    ));
            };
        

    return (
        <div className="dashboard">
            <header>
                <h1 className="main-heading">CNAPP Dashboard</h1>
            </header>
            <section className="dashboard-sections">
                <div className="dashboard-section">
                    <h2 className="section-heading">CSPM Dashboard</h2>
                    <div className="widget-row">
                        <div className="widget-container">
                            <CloudAccountsWidget name="Cloud Accounts" />
                        </div>
                        <div className="widget-container">
                            <CloudAccountRiskWidget name="Cloud Account Risk Assessment" />
                        </div>
                        <div className="widget-container add-widget" onClick={() => { setSelectedCategory('CSPM'); setIsModalOpen(true); }}>
                            <div className="add-icon">+ Add Widget</div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-section">
                    <h2 className="section-heading">CWPP Dashboard</h2>
                    <div className="widget-row">
                        <div className="widget-container">
                            <CloudAccountsWidget name="Cloud Accounts" />
                        </div>
                        <div className="widget-container">
                            <CloudAccountRiskWidget name="Cloud Account Risk Assessment" />
                        </div>
                        <div className="widget-container add-widget" onClick={() => { setSelectedCategory('CWPP'); setIsModalOpen(true); }}>
                            <div className="add-icon">+ Add Widget</div>
                        </div>
                    </div>
                </div>
            </section>
            <WidgetSelectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddWidget={handleAddWidget}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
             existingWidgets={widgets.filter(widget => widget.category === selectedCategory)}
            />
        </div>
    );
};

export default Dashboard;








// import React, { useState } from 'react';
// import WidgetSelectionModal from './WidgetSelectionModal';
// import CloudAccountsWidget from './CloudAccountsWidget';
// import CloudAccountRiskWidget from './CloudAccountRiskWidget';

// const Dashboard = () => {
//     const [widgets, setWidgets] = useState({
//         CloudAccounts: true,
//         CloudAccountRiskAssessment: true,
//     });
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleAddWidget = () => {
//         setIsModalOpen(true);
//     };

//     const handleConfirmSelection = (selectedWidgets) => {
//         setWidgets(selectedWidgets);
//     };

//     return (
//         <div className="dashboard">
//             <button onClick={handleAddWidget}>+ Add Widget</button>
//             <div className="widgets">
//                 {widgets.CloudAccounts && <CloudAccountsWidget />}
//                 {widgets.CloudAccountRiskAssessment && <CloudAccountRiskWidget />}
//             </div>
//             <WidgetSelectionModal
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//                 onConfirm={handleConfirmSelection}
//             />
//         </div>
//     );
// };

// export default Dashboard;
