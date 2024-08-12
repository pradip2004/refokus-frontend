import React from 'react'
import Button from './Button'

function Product({val}) {
  return (
    <div className='p-10 border-b-[1px] border-zinc-600 flex items-center justify-between w-full'>
      <h1 className='text-5xl font-medium'>{val.title}</h1>
      <div className='w-1/3'>
            <p className='font-normal mb-5'>{val.desc}</p>
            <div className='flex items-center gap-5'>
                  {(val.live) && <Button />}
                  {(val.caseStudy) && <Button title={'Case Study'}/>}
            </div>
      </div>
    </div>
  )
}

export default Product