import React from 'react'

function Stripe( {val}) {
  return (
    <div className='py-5 px-3 min-w-[16.66%] border-t-[1.5px] border-b-[1.5px] border-r-[1.5px] border-zinc-500 flex items-center justify-between'>
      <img className='w-24 invert' src={val.url} alt="" />
      <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe