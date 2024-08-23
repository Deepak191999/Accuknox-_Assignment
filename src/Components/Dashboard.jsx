import React, { useEffect, useState } from 'react';
import './Dashboard.css'; 
import CloudAccountsWidget from './CloudAccountsWidget/CloudAccountsWidget';
import CloudAccountRiskWidget from './CloudAccountRiskWidget/CloudAccountRiskWidget';
import WidgetSelectionModal from './WidgetSelectionModal/WidgetSelectionModal';
import SpecificAlert from './SpecificAlert/SpecificAlert';
import WorkLoadAlert from './WorkLoadAlert/WorkLoadAlert';
import ImageRiskAssessment from './ImageRiskAssessment/ImageRiskAssessment';
import ImageSecurityIssue from './ImageSecurityIssue/ImageSecurityIssue';

const Dashboard = () => {
    const [activeWidgets, setActiveWidgets] = useState({
        CSPM: [
            { id: 1, name: 'Cloud Accounts', component: <CloudAccountsWidget /> },
            { id: 2, name: 'Cloud Account Risk Assessment', component: <CloudAccountRiskWidget /> }
        ],
        CWPP: [
            { id: 3, name: 'Top 5 Namespace Specific Alerts', component: <SpecificAlert /> },
            { id: 4, name: 'Workload Alerts', component: <WorkLoadAlert /> }
        ],
        'Registry Scan': [
            { id: 5, name: 'Image Risk Assessment', component: <ImageRiskAssessment /> },
            { id: 6, name: 'Image Security Issues', component: <ImageSecurityIssue /> }
        ]
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('CSPM');
    const [modalWidgets, setModalWidgets] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); 
    const [filteredWidgets, setFilteredWidgets] = useState(activeWidgets); 

    useEffect(() => {
        // Filter all widgets based on search query
        if (searchQuery) {
            const newFilteredWidgets = {};
            Object.keys(activeWidgets).forEach(category => {
                newFilteredWidgets[category] = activeWidgets[category].filter(widget =>
                    widget.name.toLowerCase().includes(searchQuery.toLowerCase())
                );
            });
            setFilteredWidgets(newFilteredWidgets);
        } else {
            setFilteredWidgets(activeWidgets);
        }
    }, [searchQuery, activeWidgets]);

    useEffect(() => {
        // Reset modalWidgets when category changes
        setModalWidgets(activeWidgets[selectedCategory] || []);
    }, [selectedCategory, activeWidgets]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleAddWidget = (selectedWidgets) => {
        setActiveWidgets(prevWidgets => {
            const updatedWidgets = { ...prevWidgets };

            // Extract currently active widgets in the selected category
            const categoryWidgets = updatedWidgets[selectedCategory] || [];
            const currentWidgetIds = new Set(categoryWidgets.map(widget => widget.id));

            const widgetsToAdd = selectedWidgets.filter(widget => !currentWidgetIds.has(widget.id));
            const widgetsToRemove = categoryWidgets.filter(widget => !selectedWidgets.some(selected => selected.id === widget.id));

            // Update category widgets
            updatedWidgets[selectedCategory] = [
                ...categoryWidgets.filter(widget => !widgetsToRemove.includes(widget)),
                ...widgetsToAdd
            ];

            return updatedWidgets;
        });

        // Reset modalWidgets to reflect the new activeWidgets in the selected category
        setModalWidgets(activeWidgets[selectedCategory] || []);
    };

    const renderWidgets = (category) => {
        const widgets = filteredWidgets[category] || [];
        return widgets.length ? widgets.map(widget => (
            <div key={widget.id} className="widget-container">
                {widget.component}
            </div>
        )) : <div>No widgets available</div>;
    };

    return (
        <div className="dashboard">
            <header>
                <h1 className="main-heading">CNAPP Dashboard</h1>
            </header>
            <input
                type="text"
                placeholder="Search Widgets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="widget-search-input"
            />
            <section className="dashboard-sections">
                <div className="dashboard-section">
                    <h2 className="section-heading">CSPM Dashboard</h2>
                    <div className="widget-row">
                        {renderWidgets('CSPM')}
                        <div className="widget-container add-widget" onClick={() => { setSelectedCategory('CSPM'); toggleModal(); }}>
                            <div className="add-icon">+ Add Widget</div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-section">
                    <h2 className="section-heading">CWPP Dashboard</h2>
                    <div className="widget-row">
                        {renderWidgets('CWPP')}
                        <div className="widget-container add-widget" onClick={() => { setSelectedCategory('CWPP'); toggleModal(); }}>
                            <div className="add-icon">+ Add Widget</div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-section">
                    <h2 className="section-heading">Registry Scan</h2>
                    <div className="widget-row">
                        {renderWidgets('Registry Scan')}
                        <div className="widget-container add-widget" onClick={() => { setSelectedCategory('Registry Scan'); toggleModal(); }}>
                            <div className="add-icon">+ Add Widget</div>
                        </div>
                    </div>
                </div>
            </section>
            <WidgetSelectionModal
                isOpen={isModalOpen}
                onClose={toggleModal}
                onAddWidget={handleAddWidget}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                activeWidgets={activeWidgets} // Pass activeWidgets to the modal
            />
        </div>
    );
};

export default Dashboard;
