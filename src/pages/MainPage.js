import React from 'react';
import CalendarComponent from '../components/CalendarComponent';

const MainPage = () => {
    return (
        <div>
            <div className='calendar-container'>
                <h1>Grade Your Days - Improve Your Life</h1>
                <h4>To get where you want to be, you have to know where you are.</h4>
                <CalendarComponent />
            </div>
        </div>
    );
}

export default MainPage;
