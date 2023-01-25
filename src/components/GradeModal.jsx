import React from "react";
import {useState, useEffect} from 'react'
import TaskList from "./TaskList";

const GradeModal = ({ onSave, onClose, setGrade }) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)

    const pickGrade = (e) => {
        e.target.classList.add('selected-grade')
        setGrade(e.target.innerText)
    }

  return (
    <div>
      <div id="newEventModal">
        <h3>Grade Your Day</h3>
        <TaskList />
        <div className='grade-buttons'>
            <button className="grade-btn" onClick={pickGrade}>A</button>
            <button className="grade-btn" onClick={pickGrade}>B+</button>
            <button className="grade-btn" onClick={pickGrade}>B</button>
            <button className="grade-btn" onClick={pickGrade}>C+</button>
            <button className="grade-btn" onClick={pickGrade}>C</button>
            <button className="grade-btn" onClick={pickGrade}>D+</button>
            <button className="grade-btn" onClick={pickGrade}>D</button>
            <button className="grade-btn" onClick={pickGrade}>F</button>
        </div>
        <input className={error ? 'error' : ''} 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        id="eventTitleInput" 
        placeholder="Notes" />

        <button onClick={() => {
   
                onSave(title)

       
        }} id="saveButton">Save</button>
        <button onClick={onClose} id="cancelButton">Cancel</button>
      </div>
      <div id="modalBackDrop"></div>
    </div>
  );
};

export default GradeModal;
