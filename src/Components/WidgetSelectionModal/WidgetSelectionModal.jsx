// working css
import React, { useState, useEffect } from 'react';
import './WidgetSelectionModal.css';

const WidgetSelectionModal = ({ isOpen, onClose, onAddWidget, selectedCategory, setSelectedCategory }) => {
    const [selectedWidgets, setSelectedWidgets] = useState([]);

    const availableWidgets = {
        CSPM: [
            { id: 1, name: 'Cloud Accounts' },
            { id: 2, name: 'Cloud Account Risk Assessment' },
        ],
        CWPP: [
            { id: 1, name: 'Cloud Accounts' },
            { id: 2, name: 'Cloud Account Risk Assessment' },
        ],
    };

    // Update selected widgets when the category changes
    useEffect(() => {
        setSelectedWidgets((prevSelected) =>
            prevSelected.filter(widget =>
                availableWidgets[selectedCategory].some(aw => aw.id === widget.id)
            )
        );
    }, [selectedCategory]);

    const handleCheckboxChange = (widget) => {
        setSelectedWidgets((prevSelected) =>
            prevSelected.some(w => w.id === widget.id)
                ? prevSelected.filter(w => w.id !== widget.id)
                : [...prevSelected, widget]
        );
    };

    const handleConfirm = () => {
        const widgetsToAdd = selectedWidgets.map(widget => ({
            id: widget.id,
            name: widget.name,
            component: <div className="widget"><h3>{widget.name}</h3><p>Custom Content</p></div>,
        }));
        onAddWidget(widgetsToAdd);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="widget-selection-modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Select Widgets for {selectedCategory}</h2>
                <div className="tabs">
                    <button
                        className={`tab ${selectedCategory === 'CSPM' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('CSPM')}
                    >
                        CSPM
                    </button>
                    <button
                        className={`tab ${selectedCategory === 'CWPP' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('CWPP')}
                    >
                        CWPP
                    </button>
                </div>
                <div className="widget-list">
                    {availableWidgets[selectedCategory].map(widget => (
                        <div key={widget.id} className="widget-item">
                            <input
                                type="checkbox"
                                checked={selectedWidgets.some(w => w.id === widget.id)}
                                onChange={() => handleCheckboxChange(widget)}
                            />
                            <label>{widget.name}</label>
                        </div>
                    ))}
                </div>
                <div className="modal-buttons">
                    <button onClick={handleConfirm}>Confirm</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default WidgetSelectionModal;





// import React, { useState } from 'react';
// import './WidgetSelectionModal.css';

// const WidgetSelectionModal = ({ isOpen, onClose, onConfirm }) => {
//     const [selectedWidgets, setSelectedWidgets] = useState({
//         CloudAccounts: true,
//         CloudAccountRiskAssessment: true,
//     });

//     const handleToggle = (widget) => {
//         setSelectedWidgets((prevState) => ({
//             ...prevState,
//             [widget]: !prevState[widget],
//         }));
//     };

//     const handleSubmit = () => {
//         onConfirm(selectedWidgets);
//         onClose();
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <button className="close-button" onClick={onClose}>×</button>
//                 <h2>Select Widgets</h2>
//                 <div className="widget-list">
//                     <label>
//                         <input
//                             type="checkbox"
//                             checked={selectedWidgets.CloudAccounts}
//                             onChange={() => handleToggle('CloudAccounts')}
//                         />
//                         Cloud Accounts
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             checked={selectedWidgets.CloudAccountRiskAssessment}
//                             onChange={() => handleToggle('CloudAccountRiskAssessment')}
//                         />
//                         Cloud Account Risk Assessment
//                     </label>
//                 </div>
//                 <button onClick={handleSubmit}>Confirm</button>
//             </div>
//         </div>
//     );
// };

// export default WidgetSelectionModal;
