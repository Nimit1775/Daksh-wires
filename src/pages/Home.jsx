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
            Enduring Quality , Unbeatable Strength 
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
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex items-center space-x-4">
            <FaBalanceScale className="text-5xl text-slate-700" />
            <div>
              <h2 className="text-2xl font-bold">Legal Status of Firm</h2>
              <p className="text-lg">Private Limited Company </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex items-center space-x-4">
            <FaGavel className="text-5xl text-slate-700" />
            <div>
              <h2 className="text-2xl font-bold">GST No.</h2>
              <p className="text-lg">19AAACQ2101K1ZO</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex items-center space-x-4">
            <FaIndustry className="text-5xl text-slate-700" />
            <div>
              <h2 className="text-2xl font-bold">Nature of Business</h2>
              <p className="text-lg">Manufacturing</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex items-center space-x-4">
            <FaChartLine className="text-5xl text-slate-700" />
            <div>
              <h2 className="text-2xl font-bold">Turnover</h2>
              <p className="text-lg">25-30 cr</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex items-center space-x-4">
            <FaCalendarAlt className="text-5xl text-slate-700" />
            <div>
              <h2 className="text-2xl font-bold">Established</h2>
              <p className="text-lg">2018</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex items-center space-x-4">
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
