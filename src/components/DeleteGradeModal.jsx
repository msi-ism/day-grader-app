import React from "react";

const DeleteGradeModal = ({onDelete, eventText, onClose, fullDateDisplay, grade}) => {
  return (
    <div>
      <div id="deleteEventModal">
        <h2 className='modal-title'>{fullDateDisplay}</h2>
        <h3>Grade: {grade}</h3>
        <h4>Notes:</h4>
        <p id="eventText">{eventText ? eventText : 'No notes'}</p>

        <button onClick={onDelete} id="deleteButton">Delete</button>
        <button onClick={onClose} id="closeButton">Close</button>
      </div>

      <div id="modalBackDrop"></div>
    </div>
  );
};

export default DeleteGradeModal;
