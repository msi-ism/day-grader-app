import React from 'react';
import {useState, useEffect} from 'react'
import trashIco from '../images/x.png'

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

const TaskList = () => {
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
        currentTaskList.push(tasks)
        evt.target.reset()
        setBody(tasks.body)
        localStorage.setItem('savedTaskList', JSON.stringify(currentTaskList))
    }


    // ^ function to delete individual tasks by finding task by ID, splicing from current Task list and resaving to local storage
    const deleteTask = (id) => {
        let deleteIndex = currentTaskList.findIndex(task => (task.id === id))
        currentTaskList.splice(deleteIndex, 1)
        localStorage.setItem('savedTaskList', JSON.stringify(currentTaskList))
        window.location.reload()
    }

    console.log(tasksArr)
    console.log(currentTaskList)

    return (
        <div>
            <ul className='task-list'>
                    {currentTaskList.length > 0  ? currentTaskList.map((task, idx) => (
                        <li key={idx} className='task-item'>
                            <p>{task.body}</p>
                           <img src={trashIco} className='trash-button' type='submit' onClick={() => deleteTask(task.id)}></img>
                        </li>
                    )) : 'No tasks'}
                </ul>
                {currentTaskList.length < 5 ? 
                <div className='add-task'>
                    <form className='task-submit' onSubmit={addTask}>     
                        <input className='task-input' type='text' placeholder='Add a task'  onChange={handleChange}></input>
                        <button className='add-button' type='submit'>Add</button>
                    </form> 
                </div>: '' }
        </div>
    );
}

export default TaskList;
