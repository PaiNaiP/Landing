import React from 'react'
import circle from '../images/Group 7.svg'
import { Price } from './Price'

export const Prices = () => {
  return (
    <div id="our-prices">
        <div id="price-cont">
            <h1>Our Prices</h1>
            <div id="crcl-cnt-price"><img src={circle} alt="circle" /></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum issss has
            <br /> been the industry's standard dummy text ever since the 1500s.</p>
            <div id="price-cnt">
                <Price/>
            </div>
        </div>
    </div>
  )
}
