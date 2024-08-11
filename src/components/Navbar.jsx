import React from 'react'
import Button from './Button'

function Navbar() {
      return (
            <div className='max-w-screen-xl py-6 mx-auto flex border-b-[1px] border-zinc-600 items-center justify-between'>
                  <div className='flex items-center'>
                        <div className='text-lg'>refokus</div>
                        <div className="links flex gap-10 ml-20">
                              {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
                                    (elem.length === 0) ? <span className='inline-block w-[1px] h-7 bg-zinc-700'></span> :
                                          <a href='#' className='font-regular text-sm flex gap-1 items-center'>
                                                {(index === 1) && <span className='inline-block w-1 h-1 bg-green-600 rounded'></span>}
                                                {elem}</a>
                              ))}
                        </div>
                  </div>
                  <Button />
            </div>
      )
}

export default Navbar