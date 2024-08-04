import React from 'react'
import pr1 from '../assets/pr-1.jpeg'
export default function Products() {
  return (
     <div 
     className="relative bg-cover bg-center h-[85vh]"
     style={{backgroundImage: `url(${pr1})`}}
     >
      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif text-center px-4 py-2 md:px-6 md:py-4 shadow-lg">
           Premium steel wires and pins for all your needs!
        </h1>
        </div> 
     </div>
  )
}
