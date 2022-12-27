import React from 'react';
import Calendar from 'react-calendar';
import '../css/CalendarCss.css'
import { useState } from 'react';

const CalendarComponent = () => {
    const [value, onChange] = useState(new Date())
    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
}

export default CalendarComponent;
