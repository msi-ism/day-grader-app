import React from 'react';

const Rubrik = () => {
    return (
        <div className='rubrik-container'>
            <div className='rubrik-header'>
                <h2>Rubrik</h2>
            </div>
            <div className='criteria-container'>
                <h2>Daily Tasks</h2>
                <ul>
                    <li>Testing out a long Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>
                    <li>Task 4</li>
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
