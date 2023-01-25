import React from 'react';
import {useState, useEffect} from 'react'
import TaskList from './TaskList';

console.log(JSON.parse(localStorage.getItem('events')))

const Rubrik = ({gpa, currentMonth}) => {
    return (
        <div className='rubrik-container'>
            <div className='rubrik-header'>
                <h2>Rubrik</h2>
            </div>
            <div className='criteria-container'>
                <h2>Daily Goals</h2>
                <TaskList />
            </div>
            <div className='gpa-container'>
                <h2>{currentMonth}'s GPA:</h2>
                <h4>{gpa}</h4>
            </div>
            
        </div>
    );
}

export default Rubrik;
