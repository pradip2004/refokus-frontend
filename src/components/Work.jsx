import React from 'react'

function Work() {
      const images = [
            {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d7f33bdfd7f713ff552d_Singularity%20-%204%203.webp", top: "50%", left: "50%", isActive: true},
            {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d000c5875a51723e197f_Brightwave%20-%204%203.webp", top: "54%", left: "52%", isActive: false},
            {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86a8a9b4a0505553454_Arqitel%20-%204%203.webp", top: "46%", left: "48%", isActive: false},
            {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8846629f4e91cbfc152_Cula%20-%204%203.webp", top: "56%", left: "54%", isActive: false},
      ]
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto relative'>
            <h1 className='text-[35vw] leading-none tracking-wide font-medium text-center'>work</h1>
            <div className='w-full absolute top-0 h-full'>
                  {images.map((elem, index)=>(
                        (elem.isActive) && <img className='w-52 absolute -translate-x-1/2 -translate-y-1/2' style={{top: elem.top, left: elem.left}} src={elem.url} alt=""  />
                  ))}
            </div>
      </div>
    </div>
  )
}

export default Work