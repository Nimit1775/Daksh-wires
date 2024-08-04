import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-black text-white flex justify-between items-center p-3'>
      <p className='text-sm'>© 2018 Daksh Wire And Pin Private Limited. All Rights Reserved.</p>
      <div className='flex items-center'>
        <a 
          href="https://github.com/Nimit1775" 
          className="text-sm text-white hover:underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Made by Nimit Sodhani 
        </a>
      </div>
    </footer>
  )
}
