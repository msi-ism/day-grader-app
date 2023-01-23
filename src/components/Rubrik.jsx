import React from 'react';
import {useState, useEffect} from 'react'


let tasksArr = []
let savedTaskList = JSON.parse(localStorage.getItem('savedTaskList'))
console.log(savedTaskList)
console.log(JSON.parse(localStorage.getItem('events')))
let currentTaskList = []

if (savedTaskList) {
    currentTaskList = savedTaskList
} else {
    currentTaskList = []
}

const Rubrik = () => {
    const [tasks, setTasks] = useState(localStorage.getItem('savedTaskList') ? JSON.parse(localStorage.getItem('savedTaskList')) : currentTaskList)
    const [body, setBody] = useState()
    const [error, setError] = useState()
    
    const handleChange = (evt) => {
        setTasks({...tasks, ['id']: Date.now().toString(), ['body']: evt.target.value, ['isCompleted']: false})
        setError('')
    }
    
    const addTask = (evt) => {
        evt.preventDefault()
        tasksArr.push(tasks)
        currentTaskList.push(tasks.body)
        evt.target.reset()
        setBody(tasks.body)
        localStorage.setItem('savedTaskList', JSON.stringify(currentTaskList))
    }

    const deleteTasks = (evt) => {
        localStorage.removeItem('savedTaskList')
        window.location.reload()

    }

    // useEffect(() => {
    //     localStorage.setItem('savedTaskList', JSON.stringify(currentTaskList))
    // }, [tasks])

    
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
                    {currentTaskList.length > 0  ? currentTaskList.map((task, idx) => (
                        <li key={idx} className='task-item'>
                            <p>{task}</p>
                        </li>
                    )) : 'no'}
                </ul>
                <div className='add-task'>
                    <form className='task-submit' onSubmit={addTask}>     
                        <input type='text' placeholder='Add a task'  onChange={handleChange}></input>
                        <button className='add-button' type='submit'>Add</button>
                    </form> 
                        <button className='delete-button' type='submit' onClick={deleteTasks}>Delete</button>
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
