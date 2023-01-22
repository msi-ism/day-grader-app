import React from 'react';
import {useState, useEffect} from 'react'



let currentTaskList = []
let tasksArr = []
// console.log(JSON.parse(localStorage.getItem('tasks')))

const Rubrik = () => {
    const [tasks, setTasks] = useState({})
    const [body, setBody] = useState('')
    
    const [error, setError] = useState('')
    
    const handleChange = (evt) => {
        setTasks({...tasks, ['id']: Date.now().toString(), ['body']: evt.target.value, ['isCompleted']: false})
        setError('')
    }
    
    const addTask = (evt) => {
        evt.preventDefault()
        tasksArr.push(tasks)
        setTasks(tasks)
        setBody(tasks.body)
        currentTaskList.push(tasks.body)
        evt.target.reset()
        // let savedTaskList = JSON.parse(localStorage.getItem('tasks'))
        // console.log(savedTaskList)
        // console.log(currentTaskList)
    }



    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(currentTaskList))

    }, [])


    console.log(tasksArr)
    console.log(currentTaskList)




    return (
        <div className='rubrik-container'>
            <div className='rubrik-header'>
                <h2>Rubrik</h2>
            </div>
            <div className='criteria-container'>
                <h2>Daily Goals</h2>
                <ul className='task-list'>
                    {currentTaskList.length !== 0 ? currentTaskList.map((task, idx) => (
                        <li key={idx} className='task-item'>
                            <p>{task}</p>
                        </li>
                    )) : ''}
                </ul>
                <div>
                    <form className='task-submit' onSubmit={addTask}>     
                        <input type='text' placeholder='Add a task'  onChange={handleChange}></input>
                        <button type='submit'>Add</button>
                    </form> 
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
