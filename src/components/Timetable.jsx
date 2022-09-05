import React from 'react'
import circle from '../images/Group 7.svg'
import { ClassTimetable } from './ClassTimetable'

export const Timetable = () => {
  return (
    <div id="class-timetable">
        <h1>Class Timetable</h1>
        <div id='circ'><img src={circle} alt="circle"/></div>
        <p id='timetable-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum issss has<br/>
        been the industry's standard dummy text ever since the 1500s.</p>
        <div id="time-table">
            <ClassTimetable />
        </div>
    </div>
  )
}
