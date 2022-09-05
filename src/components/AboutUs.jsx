import React from 'react'
import aboutusimg from '../images/aboutus.png'

export const AboutUs = () => {
  return (
    <div id='about-us'>
        <div id='cont-about-us'>
            <div id="cnt-about-us">
                <div id="text-about-cont">
                    <h1>About Workout Fitness</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing <br/>
                    and typesetting industry. Lorem Ipsum issss has <br/> 
                    been the industry's standard dummy text ever<br/> 
                    since the 1500s, <br/>
                    when an unknown lorem printer took a galley of<br/>
                    type and scrambled it to make a type specimen<br/> 
                    book. It has survived not only five centuries.</p>
                    <button>READ MORE</button>
                </div>
                <div id="about-us-img">
                    <div id="img-us">
                        <img id='img-us' src={aboutusimg} alt="About Workout Fitness" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
