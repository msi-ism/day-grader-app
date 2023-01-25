import React from "react";

const DeleteGradeModal = ({onDelete, eventText, onClose, fullDateDisplay}) => {
  return (
    <div>
      <div id="deleteEventModal">
        <h2>{fullDateDisplay}</h2>

        <p id="eventText">{eventText}</p>

        <button onClick={onDelete} id="deleteButton">Delete</button>
        <button onClick={onClose} id="closeButton">Close</button>
      </div>

      <div id="modalBackDrop"></div>
    </div>
  );
};

export default DeleteGradeModal;
