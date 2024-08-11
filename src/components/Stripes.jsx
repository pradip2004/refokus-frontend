import React from 'react'
import Stripe from './Stripe'

function Stripes() {
      const data = [
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg", number: 48},
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg", number: 2},
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d76e013990180ea2be31_jungle-logo-black.svg", number: 11},
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg", number: 48},
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg", number: 2},
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d76e013990180ea2be31_jungle-logo-black.svg", number: 11}
      ]
  return (
    <div className='w-full flex items-center justify-between mt-10'>
      {data.map((elem, index)=>(
            <Stripe val={elem} />
      ))}
    </div>
  )
}

export default Stripes