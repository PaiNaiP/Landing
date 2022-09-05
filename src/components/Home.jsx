import React from 'react'
import fitpng from '../images/fit.png'

export const Home = () => {
  return (
      <div id='cont-home'>
        <div id='home'>
          <div id='workout-text-cont'>
              <span id='workout'>Welcome to Workout Fitness</span>
              <h1>Keep <span>Fit & Stay</span> Strong All Time</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and <br></br> typesetting industry.</p>
              <button>READ MORE</button>
          </div>
          <img src={fitpng} alt="Welcome to workout" id='fit-png'/>
        </div>
      </div>
  )
}
