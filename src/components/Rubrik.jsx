import React from 'react';
import {useState, useEffect} from 'react'

const Rubrik = () => {
    const [tasks, setTasks] = useState([])
    tasks.push('Practice guitar', 'drink 32oz of water', 'stunt on these heaux', 'try to take over the world')
    console.log(tasks)


    return (
        <div className='rubrik-container'>
            <div className='rubrik-header'>
                <h2>Rubrik</h2>
            </div>
            <div className='criteria-container'>
                <h2>Daily Tasks</h2>
                <ul className='task-list'>
                    {tasks.map((task, idx) => (
                        <li key={idx} className='task-item'>
                            <p>{task}</p>
                        </li>
                    ))}
    
                </ul>
                <button>Grade your Day</button>
            </div>
            <div className='gpa-container'>
                <h2>Current GPA:</h2>
                <h4>3.75</h4>
            </div>
            
        </div>
    );
}

export default Rubrik;
