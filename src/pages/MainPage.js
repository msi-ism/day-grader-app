import React from 'react';
import CalendarComponent from '../components/CalendarComponent';
import Day from '../components/Day';
import Rubrik from '../components/Rubrik';

const MainPage = () => {
    return (
        <div className='main-container'>
            <div className='calendar-container'>
                <CalendarComponent />
            </div>
        </div>
    );
}

export default MainPage;
