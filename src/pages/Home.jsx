import React from 'react';
import backgroundImage from '../assets/bg.jpeg';
import { FaBalanceScale, FaGavel, FaIndustry, FaChartLine, FaCalendarAlt, FaUsers } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="relative">
      {/* Background image section */}
      <div
        className="relative bg-cover bg-center h-[90vh]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold text-center px-4 py-2 md:px-6 md:py-4 shadow-lg">
            One stop solution for all your Pin and Wire needs!
          </h1>
        </div>
      </div>

      {/* "Why choose us?" section */}
      <div className="bg-white py-8">
        <h1 className='text-slate-900 text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4 py-2 md:px-6 md:py-4 shadow-lg'>
          Why choose us?
        </h1>
        <p className="text-slate-600 text-lg md:text-xl lg:text-2xl text-center px-4 py-6 md:px-8 md:py-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore suscipit facere repudiandae aspernatur minima voluptate,
          accusantium quibusdam, maxime quia dolores temporibus dolor cum neque laboriosam quod nobis deserunt vitae nihil modi.
          Corrupti doloremque quibusdam quidem, odio nisi incidunt temporibus ratione blanditiis iure quae recusandae expedita
          voluptates dolor dolores, dolore corporis.
        </p>
      </div>

      {/* Company Factsheet section */}
      <div className="bg-white py-8">
        <h1 className='text-slate-900 text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4 py-2 md:px-6 md:py-4 shadow-lg'> 
          Company Factsheet
        </h1>
        <div className="flex flex-wrap justify-center py-8">
          <div className="flex items-center space-x-4 m-4">
            <FaBalanceScale className="text-5xl text-slate-700" />
            <div>
              <h2 className="text-2xl font-bold">Legal</h2>
              <p className="text-lg">Compliance and Certifications</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 m-4">
            <FaGavel className="text-5xl text-slate-700" />
            <div>
              <h2 className="text-2xl font-bold">Legal Support</h2>
              <p className="text-lg">Expert Legal Advisory</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 m-4">
            <FaIndustry className="text-5xl text-slate-700" />
            <div>
              <h2 className="text-2xl font-bold">Factory</h2>
              <p className="text-lg">State-of-the-art Facilities</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 m-4">
            <FaChartLine className="text-5xl text-slate-700" />
            <div>
              <h2 className="text-2xl font-bold">Turnover</h2>
              <p className="text-lg">$5 Million</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 m-4">
            <FaCalendarAlt className="text-5xl text-slate-700" />
            <div>
              <h2 className="text-2xl font-bold">Established</h2>
              <p className="text-lg">1995</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 m-4">
            <FaUsers className="text-5xl text-slate-700" />
            <div>
              <h2 className="text-2xl font-bold">Employees</h2>
              <p className="text-lg">200+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
