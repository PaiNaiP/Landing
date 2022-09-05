import React from 'react'
import circle from '../images/Group 7.svg'
import img1 from '../images/Rectangle 36.png'
import img2 from '../images/Rectangle 38.png'

export const Blog = () => {
  return (
    <div id="our-blog">
        <div id="blog-cont">
            <h1>Our Blog</h1>
            <div id='circ-cnt'><img src={circle} alt="circle"/></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum issss has <br/>
                been the industry's standard dummy text ever since the 1500s.</p>
            <div id='cnt-img-blg'>
                <div id="cont-img-blog">
                    <div id="img-blog-text-cont">
                        <img src={img1} alt="Blog" />
                        <div id="cont-txt-blog">
                            <div id="txt-blg">
                                <h2>Curabitur Ante Justo, Vitae.</h2>
                                <div id='spn-cnt'><span>24 March, 2022</span></div>
                                <div id="p-cnt"><p>Lorem Ipsum is simply <br /> dummy text of the printing</p></div>
                                <div id="rd-cnt"><h2>Read More</h2></div>
                            </div>
                        </div>
                    </div>
                    <div id="img-blog-text-cont">
                        <img src={img2} alt="Blog" />
                        <div id="cont-txt-blog">
                            <div id="txt-blg">
                                <h2>Curabitur Ante Justo, Vitae.</h2>
                                <div id='spn-cnt'><span>24 March, 2022</span></div>
                                <div id="p-cnt"><p>Lorem Ipsum is simply <br /> dummy text of the printing</p></div>
                                <div id="rd-cnt"><h2>Read More</h2></div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
