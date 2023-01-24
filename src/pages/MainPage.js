import React from 'react';
import CalendarComponent from '../components/CalendarComponent';
import Day from '../components/Day';
import Rubrik from '../components/Rubrik';

const MainPage = ({setGPA}) => {
    return (
        <div className='main-container'>
            <div className='calendar-container'>
                <CalendarComponent setGPA={setGPA}/>
            </div>
        </div>
    );
}

export default MainPage;
