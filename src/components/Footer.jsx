import React from 'react'

function Footer() {
      return (
            <div className='w-full mt-10'>
                  <div className='max-w-screen-xl mx-auto flex items-center gap-16'>
                        <div className='w-1/2 p-5'>
                              <h1 className='text-[12rem] font-bold tracking-tight leading-none'>refokus.</h1>
                        </div>
                        <div className='w-1/2 p-5 text-zinc-400 flex justify-between'>
                              <div>
                                    <h3>Socials</h3>
                                    <div className='flex flex-col gap-1 mt-7'>

                                          {["instagram", "twitter", "linkedin"].map((item, index) => (
                                                <a href="#" key={index} >{item}</a>
                                          ))}
                                    </div>
                              </div>
                              <div>
                                    <h3>Socials</h3>
                                    <div className='flex flex-col gap-1 mt-7'>

                                          {["instagram", "twitter", "linkedin"].map((item, index) => (
                                                <a href="#" key={index} >{item}</a>
                                          ))}
                                    </div>
                              </div>
                              <div className='w-1/2'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repellat?
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Footer