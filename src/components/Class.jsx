import React from 'react'
import Classes from '../server/db.json'
import Time from '../images/Time.svg'
import Name from '../images/Name.svg'

export const Class = () => {
  return (
    <div id='class'>
      {Classes.classes.map( classes => {
        return(
          <div id="cls-cnt">
              <img src={classes.image} alt="images" />
              <div id="title-cont">{classes.title}</div>
              <hr />
              <div id="time-and-name-cont">
                <img id='name' src={Name} alt="Name" />
                <p id='name-text'>{classes.name}</p>
                <div id="time-cont">
                  <img src={Time} alt="Time" id='time'/>
                  <p id='time-text'>{classes.time}</p>
                </div>
              </div>
            </div>
        )
      })}
    </div>
  )
}
