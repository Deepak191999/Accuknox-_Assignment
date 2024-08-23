import React, { useState, useEffect } from 'react';
import './WidgetSelectionModal.css';
import CloudAccountsWidget from '../CloudAccountsWidget/CloudAccountsWidget';
import CloudAccountRiskWidget from '../CloudAccountRiskWidget/CloudAccountRiskWidget';
import SpecificAlert from '../SpecificAlert/SpecificAlert';
import WorkLoadAlert from '../WorkLoadAlert/WorkLoadAlert';
import ImageRiskAssessment from '../ImageRiskAssessment/ImageRiskAssessment';
import ImageSecurityIssue from '../ImageSecurityIssue/ImageSecurityIssue';

const WidgetSelectionModal = ({ isOpen, onClose, onAddWidget, selectedCategory, modalWidgets }) => {
    const allWidgets = {
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
    };

    const [selectedWidgets, setSelectedWidgets] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query
    const [filteredWidgets, setFilteredWidgets] = useState(allWidgets[selectedCategory]); // State for filtered widgets

    useEffect(() => {
        // Initialize selected widgets based on the modal's widget list
        if (modalWidgets) {
            const currentWidgetIds = new Set(modalWidgets.map(widget => widget.id));
            setSelectedWidgets(Array.from(currentWidgetIds));
        }
        // Reset filtered widgets when the selected category changes
        setFilteredWidgets(allWidgets[selectedCategory]);
    }, [modalWidgets, selectedCategory]);

    useEffect(() => {
        // Filter widgets based on search query
        if (searchQuery) {
            setFilteredWidgets(allWidgets[selectedCategory].filter(widget => 
                widget.name.toLowerCase().includes(searchQuery.toLowerCase())
            ));
        } else {
            setFilteredWidgets(allWidgets[selectedCategory]);
        }
    }, [searchQuery, selectedCategory]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleWidgetToggle = (widgetId) => {
        setSelectedWidgets(prevSelectedWidgets => {
            if (prevSelectedWidgets.includes(widgetId)) {
                return prevSelectedWidgets.filter(id => id !== widgetId);
            } else {
                return [...prevSelectedWidgets, widgetId];
            }
        });
    };

    const handleConfirm = () => {
        const newWidgets = allWidgets[selectedCategory].filter(widget => selectedWidgets.includes(widget.id));
        onAddWidget(newWidgets);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="widget-selection-modal">
            <div className="modal-content">
                <h2>Select Widgets for {selectedCategory}</h2>
                <input
                    type="text"
                    placeholder="Search Widgets..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="widget-search-input"
                />
                <div className="widget-list">
                    {filteredWidgets.map(widget => (
                        <div key={widget.id} className="widget-option">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedWidgets.includes(widget.id)}
                                    onChange={() => handleWidgetToggle(widget.id)}
                                />
                                {widget.name}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="modal-actions">
                    <button onClick={handleConfirm}>Confirm</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default WidgetSelectionModal;
