import React from 'react'
import Card from './Card'

function Cards() {
      return (
            <div className='w-full mt-10 '>
                  <div className='max-w-screen-xl mx-auto flex gap-3'>

                        <Card width={"basis-1/3"} start={false} para={true} title={"Who we are"} />
                        <Card width={"basis-2/3"} start={true} para={false} title={"Let's get to it, together."} hover={"bg-violet-600"}/>
                  </div>
            </div>
      )
}

export default Cards