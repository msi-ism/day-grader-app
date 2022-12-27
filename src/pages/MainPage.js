import React from 'react';
import CalendarComponent from '../components/CalendarComponent';

const MainPage = () => {
    return (
        <div>
            <h1>Hello Main Page!</h1>
            <div className='calendar-container'>
                <CalendarComponent />
            </div>

        </div>
    );
}

export default MainPage;
