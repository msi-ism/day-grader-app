import React from 'react';
import {useState, useEffect} from 'react'

const Rubrik = () => {
    const [tasks, setTasks] = useState({
        tasks: '',

    })
  
    const [error, setError] = useState('')

    const handleChange = (evt) => {
        setTasks({...tasks, [evt.target.name]: evt.target.value})
    }

    console.log(tasks)
    return (
        <div className='rubrik-container'>
            <div className='rubrik-header'>
                <h2>Rubrik</h2>
            </div>
            <div className='criteria-container'>
                <h2>Daily Goals</h2>
                <ul className='task-list'>
                    {/* {tasks.map((task, idx) => (
                        <li key={idx} className='task-item'>
                            <p>{task}</p>
                        </li>
                    ))} */}
                </ul>
                <div className='task-submit'>
                <input type='text' placeholder='Add a task' onChange={handleChange}></input>
                <button>Add</button>
                </div>
            </div>
            <div className='gpa-container'>
                <h2>Current GPA:</h2>
                <h4>3.75</h4>
            </div>
            
        </div>
    );
}

export default Rubrik;
