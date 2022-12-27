import React from 'react';
import Calendar from 'react-calendar';
import '../css/CalendarCss.css'
import { useState } from 'react';


const CalendarComponent = (props) => {
    console.log(props)
    const selectedDate = props.date
    console.log(selectedDate)
    const [value, onChange] = useState(new Date())
    return (
        <div>
            <Calendar onChange={onChange} value={value} />
            <div className='current-date'>
                <h1>The Selected Date is:{selectedDate}</h1>
            </div>
        </div>
    );
}

export default CalendarComponent;
