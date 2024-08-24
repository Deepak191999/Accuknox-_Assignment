import React, { useEffect, useMemo, useState } from 'react';
import './WidgetSelectionModal.css'; 
import CloudAccountsWidget from '../CloudAccountsWidget/CloudAccountsWidget';
import CloudAccountRiskWidget from '../CloudAccountRiskWidget/CloudAccountRiskWidget';
import SpecificAlert from '../SpecificAlert/SpecificAlert';
import WorkLoadAlert from '../WorkLoadAlert/WorkLoadAlert';
import ImageRiskAssessment from '../ImageRiskAssessment/ImageRiskAssessment';
import ImageSecurityIssue from '../ImageSecurityIssue/ImageSecurityIssue';

const WidgetSelectionModal = ({ isOpen, onClose, onAddWidget, selectedCategory, setSelectedCategory, activeWidgets }) => {
    const allWidgets =  useMemo(() => ({
        CSPM: [
            { id: 1, name: 'Cloud Accounts', component: <CloudAccountsWidget /> },
            { id: 2, name: 'Cloud Account Risk Assessment', component: <CloudAccountRiskWidget /> },
        ],
        CWPP: [
            { id: 3, name: 'Top 5 Namespace Specific Alerts', component: <SpecificAlert /> },
            { id: 4, name: 'Workload Alerts', component: <WorkLoadAlert /> },
        ],
        'Registry Scan': [
            { id: 5, name: 'Image Risk Assessment', component: <ImageRiskAssessment /> },
            { id: 6, name: 'Image Security Issues', component: <ImageSecurityIssue /> },
        ],
    }), []); 

    const [selectedWidgets, setSelectedWidgets] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredWidgets, setFilteredWidgets] = useState(allWidgets[selectedCategory]);

    useEffect(() => {
        // Update the selected widgets based on the activeWidgets prop
        if (activeWidgets) {
            const currentWidgetIds = new Set(
                Object.values(activeWidgets).flat().map(widget => widget.id)
            );
            setSelectedWidgets(allWidgets[selectedCategory].map(widget =>
                currentWidgetIds.has(widget.id) ? widget.id : null
            ).filter(id => id !== null));
        }
    }, [activeWidgets, selectedCategory,allWidgets]);

    useEffect(() => {
        if (searchQuery) {
            setFilteredWidgets(allWidgets[selectedCategory].filter(widget =>
                widget.name.toLowerCase().includes(searchQuery.toLowerCase())
            ));
        } else {
            setFilteredWidgets(allWidgets[selectedCategory]);
        }
    }, [searchQuery, selectedCategory,allWidgets]);

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
                <div className="tabs">
                    <button
                        className={`tab ${selectedCategory === 'CSPM' ? 'active' : ''}`}
                        onClick={() => {
                            setSelectedCategory('CSPM');
                            setSearchQuery('');  // Reset search query when switching tabs
                        }}
                    >
                        CSPM
                    </button>
                    <button
                        className={`tab ${selectedCategory === 'CWPP' ? 'active' : ''}`}
                        onClick={() => {
                            setSelectedCategory('CWPP');
                            setSearchQuery('');  // Reset search query when switching tabs
                        }}
                    >
                        CWPP
                    </button>
                    <button
                        className={`tab ${selectedCategory === 'Registry Scan' ? 'active' : ''}`}
                        onClick={() => {
                            setSelectedCategory('Registry Scan');
                            setSearchQuery('');  // Reset search query when switching tabs
                        }}
                    >
                        Registry Scan
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Search Widgets..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="widget-search-input"
                />
                <div className="widget-list">
                    {filteredWidgets.map(widget => (
                        <div key={widget.id} className="widget-item">
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
                    <button onClick={handleConfirm} className="confirm-button">Confirm</button>
                    <button onClick={onClose} className="cancel-button">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default WidgetSelectionModal;
