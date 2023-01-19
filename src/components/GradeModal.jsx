import React from "react";
import {useState, useEffect} from 'react'

const GradeModal = ({ onSave, onClose }) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)


  return (
    <div>
      <div id="newEventModal">
        <h2>New Event</h2>

        <input className={error ? 'error' : ''} 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        id="eventTitleInput" 
        placeholder="Event Title" />

        <button onClick={() => {
            if (title) {
                setError(false)
                onSave(title)

            } else {
                setError(true)
            }
        }} id="saveButton">Save</button>
        <button onClick={onClose} id="cancelButton">Cancel</button>
      </div>
      <div id="modalBackDrop"></div>
    </div>
  );
};

export default GradeModal;
