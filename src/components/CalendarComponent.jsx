import React from "react";
import CalendarHeader from "./CalendarHeader";
import {useState, useEffect} from 'react'
import Day from "./Day";
import { setDate } from "date-fns";
import GradeModal from "./GradeModal";
import DeleteGradeModal from "./DeleteGradeModal";
import { eventWrapper } from "@testing-library/user-event/dist/utils";




const CalendarComponent = ({setGPA}) => {

// //^ creating nav state for month selection. '0' is current month. +1 is next. -1 is prior.
const [nav, setNav] = useState(0)
// ^ setting days
const [days, setDays] = useState([])
// ^ setting date displayed
const [dateDisplay, setDateDisplay] = useState()
// ^ setting clicked state for days
const [clicked, setClicked] = useState(null)
// ^ setting state for events - checks local storage for event object and returns it or empty array if N/A
const [events, setEvents] = useState(localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [])
console.log(events)
// ^ set Grade
const [grade, setGrade] = useState('')

// ^ Helper Function - for each event we want to find the one where the event date matches the date that is passed
const eventForDate = date => events.find(e => e.date === date)


   


// ^ writing function to check for date changes in local storage. Each time events changes, the events is updated in local storage
useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events])

// ^ setting up effect to re-load components on events, or nav change
useEffect(() => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const date = new Date()

    // ^ sets correct month depending on what nav is
    if (nav !== 0) {
        date.setMonth(new Date().getMonth() + nav)
    }

    const day  = date.getDate()
    const month = date.getMonth()

    const year = date.getFullYear()

    const firstDayOfMonth = new Date(year, month, 1)

    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    })

    setDateDisplay(`${date.toLocaleDateString('en-us', { month: 'long' })} ${year}`)

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0])


    const daysArr = []

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
        const dayString = `${month + 1}/${i - paddingDays}/${year}`
        if (i > paddingDays) {
            daysArr.push({
                value: i - paddingDays,
                event: eventForDate(dayString),
                isCurrentDay: i - paddingDays === day && nav === 0 ? true : false,
                date: dayString,
                grade: grade,
            })
            
        } else {
            daysArr.push({
                value: 'padding',
                event: null,
                isCurrentDay: false,
                date: '', 
            })
        }

    }
    setDays(daysArr)
}, [events, nav])

let gradesArr = []
 for (let i = 0; i < days.length; i++) {
    if (days[i].event)
    gradesArr.push(days[i].event.grade)
 }
 
 for (let i=0; i < gradesArr.length; i++) {
    if (gradesArr[i] == 'F') {
        gradesArr[i] = (Math.round(0 * 100) / 100).toFixed(1)
    } else if (gradesArr[i] == 'D') {
        gradesArr[i] = (Math.round(1 * 100) / 100).toFixed(1)
    } else if (gradesArr[i] == 'D+') {
        gradesArr[i] = (Math.round(1.5 * 100) / 100).toFixed(1)
    } else if (gradesArr[i] == 'C') {
        gradesArr[i] = (Math.round(2 * 100) / 100).toFixed(1)
    } else if (gradesArr[i] == 'C+') {
        gradesArr[i] = (Math.round(2.5 * 100) / 100).toFixed(1)
    } else if (gradesArr[i] == 'B') {
        gradesArr[i] = (Math.round(3 * 100) / 100).toFixed(1)
    } else if (gradesArr[i] == 'B+') {
        gradesArr[i] = (Math.round(3.5 * 100) / 100).toFixed(1)
    } else if (gradesArr[i] == 'A') {
        gradesArr[i] = (Math.round(4 * 100) / 100).toFixed(1)
    }    
}

let total = 0
for (let i=0; i < gradesArr.length; i++) {
    total += i
}

let gpa = total / gradesArr.length
setGPA(gpa)
 console.log(gradesArr)
 console.log(gpa)


  return (
    <>
    <div id="calendar-container">
      <CalendarHeader 
      dateDisplay={dateDisplay}
      onNext={() => setNav(nav + 1)}
      onBack={() => setNav(nav - 1)}
      />
      <div id="weekdays">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>
      <div id='calendar'>
        {days.map((day, idx) => ( 
            <Day
            key={idx} 
            day={day}
            // numberGrade={() => numberGrade(day.event.title)}
            onClick={() => {
                if (day.value !== 'padding') {
                    setClicked(day.date)
                    console.log(clicked)
                }
            }}
            />
        ))}
      </div>
    </div>
    { clicked && !eventForDate(clicked) && 
        <GradeModal 
        setGrade={setGrade}
        onClose={() => setClicked(null)}
        onSave={title => {
            setEvents([ ...events, { title, date: clicked, grade: grade }])
            setClicked(null)
        }}

       />}
    { clicked && eventForDate(clicked) && 
        <DeleteGradeModal 
        eventText={eventForDate(clicked).title}
        onClose={() => setClicked(null)}
        onDelete={() => {
            setEvents(events.filter(e => e.date !== clicked))
            setClicked(null)
        }}/>}
    </>
  );
};

export default CalendarComponent;
