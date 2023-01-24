import React from 'react';

const Day = ({day, onClick, numberGrade}) => {
    const className = `day ${day.value === 'padding' ? 'padding' : ''} ${day.isCurrentDay ? 'currentDay' : ''}`


    return (
        <div onClick={onClick} className={className}>
            <p className='calendar-date'>{day.value === 'padding' ? '' : day.value}</p>
            {/* {day.event && <div className='event'>{day.event.title}</div>} */}
            {day.event && <div className='grade'>{day.grade}</div>}
        </div>
    );
}

export default Day;
