import React from 'react';
import Calendar from 'react-calendar';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import '../css/CalendarCss.css'
import { useState } from 'react';

function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }

const now = new Date();


const datesWithExtraContent = [now]
let grade = 'A+'

function tileContent({ date, view }) {
    if (
      view === "month" &&
      datesWithExtraContent.find((dDate) => isSameDay(dDate, date))
    ) {
      return (
        <div className='grade'>
          <p>{grade}</p>
        </div>
      );
    }
}

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date())
    console.log(grade)
    return (
        <div>
            <Calendar 
            onChange={setDate} 
            value={date}
            tileContent={tileContent}
            />
            <div className='current-date'>
                <h1>The Selected Date is: {date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})} </h1>
                <h3>Today's Grade is: {grade}</h3>
            </div>
        </div>
    );
}

export default CalendarComponent;
