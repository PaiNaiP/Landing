import React from 'react'
import circle from '../images/Group 7.svg'
import img1 from '../images/Rectangle 29.png'
import img2 from '../images/Rectangle 30.png'
import img3 from '../images/Rectangle 31.png'
import img4 from '../images/Rectangle 32.png'
import img5 from '../images/Rectangle 33.png'
import img6 from '../images/Rectangle 34.png'

export const Gallery = () => {
  return (
    <div id="our-gallery">
        <div id="gallery-cont">
            <h1>Our Gallary</h1>
            <img src={circle} alt="circle" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum issss has <br/>
                been the industry's standard dummy text ever since the 1500s.</p>
            <div id="img-cont-gallery">
                <img src={img1} alt="gallery" />
                <img src={img2} alt="gallery" />
                <img src={img3} alt="gallery" />
                <br />
                <img src={img4} alt="gallery" />
                <img src={img5} alt="gallery" />
                <img src={img6} alt="gallery" />
            </div>
        </div>
    </div>
  )
}
