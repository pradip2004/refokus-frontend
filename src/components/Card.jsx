import React from 'react'
import { GoArrowRight } from "react-icons/go";
function Card({width, start, para, title, hover}) {
  return (
    <div className={`${width} bg-zinc-700 p-5 rounded-xl hover:${hover}`}>
      <div className='flex items-center justify-between'>
            <h3 className='text-sm text-zinc-400'>Up Next: Culture</h3>
            <GoArrowRight />
      </div>
      <div className='mt-5 min-h-[18rem] flex flex-col justify-between '>
            <h2 className='text-2xl w-36'>{title}</h2>
            <div className='  flex flex-col gap-5'>
                  {start && (
                        <>
                              <h1 className='text-6xl font-medium'>Start A Project</h1>
                              <button className='border-2 py-2 px-6 rounded-full text-sm w-32'>Contact us</button>
                        </>
                  )}
                  {
                        para && (
                              <p className='text-sm font-light text-zinc-400'>Explore what drives our team.</p>
                        )
                  }
                  
            </div>
      </div>
    </div>
  )
}

export default Card