import React from 'react'
import Events from '../server/events.json'

export const ClassTimetable = () => {
  return(
    <div id='tables'>
      <table>
        <tr>
          <th>Time</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
        <td><div id='time-table'>8:00 AM</div></td>
        {Events.Exercise.map(events =>{
          return(
            <>
            {!events.Name&&<td></td>}
            {events.Name&&<td style={{backgroundColor: "#8C9EDB", color: "white"}}>
              <div id="events">
              <span>Exercise</span>
                <div id='event-name'><p>{events.Name}</p></div>
                <div id='event-time'><p>{events.Time}</p></div>
              </div>
            </td>}
            </>
          )})}
          </tr>
          <tr>
          <td><div id='time-table'>12:00 PM</div></td>
          {Events.Karate.map(events =>{
          return(
            <>
            {!events.Name&&<td></td>}
            {events.Name&&<td style={{backgroundColor: "#F76C73", color: "white"}}>
              <div id="events">
              <span>Karate</span>
                <div id='event-name'><p>{events.Name}</p></div>
                <div id='event-time'><p>{events.Time}</p></div>
              </div>
            </td>}
            </>
          )})}
          </tr>
          <tr>
          <td><div id='time-table'>4:00 PM</div></td>
          {Events.Yoga.map(events =>{
          return(
            <>
            {!events.Name&&<td></td>}
            {events.Name&&<td style={{backgroundColor: "#DBAADD", color: "white"}}>
              <div id="events">
              <span>Yoga</span>
                <div id='event-name'><p>{events.Name}</p></div>
                <div id='event-time'><p>{events.Time}</p></div>
              </div>
            </td>}
            </>
          )})}
          </tr>
      </table>
    </div>
  )
}
