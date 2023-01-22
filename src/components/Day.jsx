import React from 'react';

const Day = ({day, onClick}) => {
    const className = `day ${day.value === 'padding' ? 'padding' : ''} ${day.isCurrentDay ? 'currentDay' : ''}`

    const numberGrade = () => {
        let letter = day.event.title
        if (letter == 'F') {
            return (Math.round(0 * 100) / 100).toFixed(1)
        } else if (letter == 'D') {
            return (Math.round(1 * 100) / 100).toFixed(1)
        } else if (letter == 'C') {
            return (Math.round(2 * 100) / 100).toFixed(1)
        } else if (letter == 'B') {
            return (Math.round(3 * 100) / 100).toFixed(1)
        } else if (letter == 'A') {
            return (Math.round(4 * 100) / 100).toFixed(1)
        }    

    }

    return (
        <div onClick={onClick} className={className}>
            {day.value === 'padding' ? '' : day.value}
            {day.event && <div className='event'>{day.event.title}</div>}
            {day.event && <div className='gpa'>{numberGrade()}</div>}
        </div>
    );
}

export default Day;
