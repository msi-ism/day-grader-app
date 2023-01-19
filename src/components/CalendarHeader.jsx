import React from "react";

const CalendarHeader = ({onNext, onBack, dateDisplay}) => {
  return (
    <div id="header">
      <div id="monthDisplay">{dateDisplay}</div>
      <div>
        <button id="backButton">Back</button>
        <button id="nextButton">Next</button>
      </div>
    </div>
  );
};

export default CalendarHeader;
