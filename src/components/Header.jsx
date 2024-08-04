import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className='bg-black shadow-md p-3 relative'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-white text-2xl font-bold'>Daksh</span>
            <span className='text-slate-700 text-2xl font-bold'>Wires</span>
          </h1>
        </Link>

        <button
          className='text-white sm:hidden z-50'
          onClick={toggleSidebar}
        >
          ☰
        </button>

        <ul className={`hidden sm:flex gap-4`}>
          <Link to='/'>
            <li className='text-white hover:underline'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='text-white hover:underline'>About Us</li>
          </Link>
          <Link to='/products'>
            <li className='text-white hover:underline'>Products</li>
          </Link>
          <Link to='/clients'>
            <li className='text-white hover:underline'>Clients</li>
          </Link>
          <Link to='/gallery'>
            <li className='text-white hover:underline'>Infrastructure</li>
          </Link>
          <Link to='/contact'>
            <li className='text-white hover:underline'>Contact Us</li>
          </Link>
        </ul>
      </div>

      {/* Sidebar for mobile */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black text-white p-4 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden z-50`}>
        <button
          className='text-white mb-4'
          onClick={toggleSidebar}
        >
          ×
        </button>
        <ul className='flex flex-col'>
          <Link to='/'>
            <li className='py-2 border-b border-slate-600 hover:bg-slate-700'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='py-2 border-b border-slate-600 hover:bg-slate-700'>About Us</li>
          </Link>
          <Link to='/products'>
            <li className='py-2 border-b border-slate-600 hover:bg-slate-700'>Products</li>
          </Link>
          <Link to='/clients'>
            <li className='py-2 border-b border-slate-600 hover:bg-slate-700'>Clients</li>
          </Link>
          <Link to='/gallery'>
            <li className='py-2 border-b border-slate-600 hover:bg-slate-700'>Infrastructure</li>
          </Link>
          <Link to='/contact'>
            <li className='py-2 border-b border-slate-600 hover:bg-slate-700'>Contact Us</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
