import React from 'react'
import Prices from '../server/prices.json'

export const Price = () => {
  return (
    <div id="price-cnt-one">
        {Prices.prices.map(price=>{
            return(
                <>
                <div>
                <div id="prct-cnt">
                    <div id="package-cnt">{price.package}</div>
                    <div id="price-cnt">
                        <div id='price'>${price.price}</div>
                        <div id="month-price">/MONTH</div>
                    </div>
                    <div id="bonus-cnt">
                        <div id="bonus-top">{price.bonus1}</div>
                        <div id="bonus">{price.bonus2}</div>
                        <div id="bonus">{price.bonus3}</div>
                        <div id="bonus-bot">{price.bonus4}</div>
                    </div>
                </div>
                    <div id="GetStarted">GET STARTED</div>
                </div>
                </>
            )
        })}
    </div>
  )
}
