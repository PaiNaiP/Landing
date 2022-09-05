import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

export const Header = () => {
  return (
    <div id="nav">
    <ul>
        <li><Link
        activeClass="active"
        to="cont-home"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}>Home</Link>
        </li>
        <li><Link
        activeClass="active"
        to="about-us"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}>About Us</Link>
        </li>
        <li><Link
        activeClass="active"
        to="our-classes"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}>Classes</Link>
        </li>
        <li><Link
        activeClass="active"
        to="our-gallery"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}>Gallery</Link>
        </li>
        <li><Link
        activeClass="active"
        to="our-blog"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}>Blog</Link>
        </li>
        <li><Link
        activeClass="active"
        to="our-prices"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}>Pricing</Link>
        </li>
        <li><button id='btn-contact'>CONTACT</button></li>
    </ul>
</div>
  )
}