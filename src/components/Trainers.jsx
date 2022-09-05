import React from 'react'
import circle from '../images/Group 7.svg'
import img1 from '../images/Rectangle25.png'
import img2 from '../images/Rectangle26.png'
import img3 from '../images/Rectangle27.png'

export const Trainers = () => {
  return (
    <div id="our-trainers">
        <div id="trainers-cont">
            <h1>Our Trainers</h1>
            <img src={circle} alt="circle" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum issss has <br/>
                been the industry's standard dummy text ever since the 1500s.</p>
            <div id="trainers-images-cont">
                <img src={img1} alt="trainers" />
                <img src={img2} alt="trainers" />
                <img src={img3} alt="trainers" />
            </div>
        </div>
    </div>
  )
}
