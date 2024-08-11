import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
function App() {
  return (
    <div className='bg-zinc-800 text-white font-["sathoshi_variable"] w-full'>
      <Navbar />
      <Work />
      <Stripes />
    </div>
  )
}

export default App