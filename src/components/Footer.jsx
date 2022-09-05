import React from 'react'
import socialmedia from '../images/Social Icons.svg'
import phone from '../images/Icon.svg'
import message from '../images/Icon-1.svg'
import mail from '../images/Icon-2.svg'

export const Footer = () => {
  return (
    <div id="footer">
        <div id="footer-cont">
            <div id="social-media">
                <p>Praesent sapien massa, convallis <br/>
                a pellentesque nec, egestas non <br/>
                nisi. Sed porttitor lectus nibh.</p>
                <div id="media-icons">
                    <img src={socialmedia} alt="social media" />
                </div>
            </div>
            <div id="ft-cnt">
                <h5>About Us</h5>
                <div><span>Our History</span></div>
                <div><span>Company Information</span></div>
                <div><span>Our Team</span></div>
                <div><span>Acheivements</span></div>
            </div>
            <div id="ft-cnt">
                <h5>Legal</h5>
                <div><span>Privacy Policy</span></div>
                <div><span>Terms of Service</span></div>
                <div><span>Cookie Policy</span></div>
                <div><span>Refunds & Returns</span></div>
            </div>
            <div id="ft-cnt">
                <h5>Contact</h5>
                <div><span>My Account</span></div>
                <div><span>F.A.Q</span></div>
                <div><span>Contact Us</span></div>
            </div>
            <div id="rch-cont">
            <div id="ft-cnt">
                <h5>Reach Us</h5>
                <div id='reach-cont'>
                    <img src={phone} alt="phone"/>
                    <div id='reach'>
                        <span id='reach-txt'>1 800-123-4567</span>
                    </div>
                </div>
                <div id='reach-cont'>
                    <img src={message} alt="message"/>
                    <div id='reach'>
                        <span id='reach-txt'>Live Chat 8-5 PST</span>
                    </div>
                </div>
                
                <div id='reach-cont'>
                    <img src={mail} alt="mail" />
                    <div id='reach'>
                        <span id='reach-txt'>work@creattstudios.com</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
