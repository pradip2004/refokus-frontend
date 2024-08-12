import React from 'react'
import { PiArrowBendDownRightBold } from "react-icons/pi";

function Button( {title = 'Get Started'}) {
  return (
    <div className='py-2 px-3 bg-white w-32 rounded-full text-black flex items-center justify-between'>
      <span className='font-medium text-sm'>{title}</span>
      <PiArrowBendDownRightBold />
    </div>
  )
}

export default Button