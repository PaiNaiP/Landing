import React from 'react'
import circle from '../images/Group 7.svg'
import comma from '../images/Group 51.svg'

export const Testimonies = () => {
  return (
    <div id="testimonies-cont">
        <div id="cont-testi">
            <h1>Testimonies</h1>
            <img src={circle} alt="circle" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum issss has <br />
            been the industry's standard dummy text ever since the 1500s.</p>
            <img src={comma} alt="comma" id='comma'/>
            <div id="testimonies-txt">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br />
                Ipsum issss has been the industry's standard dummy text ever since the 1500s.</p>
                    <div id="wyms"><span>Eli Wyms</span></div>
                <div id='CEO'>CEO Microsoft</div>
            </div>
        </div>
    </div>
  )
}
