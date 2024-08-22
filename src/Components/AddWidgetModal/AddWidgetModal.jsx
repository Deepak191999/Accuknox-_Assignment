import React, { useState } from 'react';
import './AddWidgetModal.css';

const AddWidgetModal = ({ isOpen, onClose, onAddWidget }) => {
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (widgetName && widgetText) {
            onAddWidget({ name: widgetName, text: widgetText });
            setWidgetName('');
            setWidgetText('');
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Add Widget</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Widget Name:
                        <input
                            type="text"
                            value={widgetName}
                            onChange={(e) => setWidgetName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Widget Text:
                        <textarea
                            value={widgetText}
                            onChange={(e) => setWidgetText(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Add Widget</button>
                </form>
            </div>
        </div>
    );
};

export default AddWidgetModal;
