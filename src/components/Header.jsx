import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-black shadow-md p-3'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-white text-2xl font-bold'>Daksh</span>
            <span className='text-slate-700 text-2xl font-bold'>Wires</span>
          </h1>
        </Link>
        <ul className='flex gap-4'>
        <Link to='/'>
            <li className='hidden sm:inline text-white hover:underline'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-white hover:underline'>About Us</li>
          </Link>
          <Link to='/products'>
            <li className='hidden sm:inline text-white hover:underline'>Products</li>
          </Link>
          <Link to='/clients'>
            <li className='hidden sm:inline text-white hover:underline'> Clients</li>
          </Link>
          <Link to='/gallery'>
            <li className='hidden sm:inline text-white hover:underline'>Infrastructure</li>
          </Link>
          <Link to='/contact'>
            <li className='hidden sm:inline text-white hover:underline'>Contact Us</li>
          </Link>
          
        </ul>
      </div>
    </header>
  );
}
