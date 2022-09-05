import React from 'react'
import circle from '../images/Group 7.svg'
import { Class } from './Class'

export const Classes = () => {
  return (
    <div id="our-classes">
        <div id="classes-cont">
            <div id="cnt-classes">
                <h1>Our Classes</h1>
                <div>
                <div id="cnt-circle">
                  <div id="circle-cont">
                    <img id='circle' src={circle} alt="circle" />
                  </div>
                </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum issss has <br />
                been the industry's standard dummy text ever since the 1500s.</p>
                <div id="clss-cnt">
                  <div id="clsss-cnt">
                    <Class/>
                  </div>
                </div>
                <button>VIEW ALL CLASSES</button>
            </div>
        </div>
    </div>
  )
}
