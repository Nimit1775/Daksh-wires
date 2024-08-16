import React, { useEffect } from 'react';
import backgroundImage from '../assets/bg.webp';
import { FaBalanceScale, FaGavel, FaIndustry, FaChartLine, FaCalendarAlt, FaUsers } from 'react-icons/fa';

export default function Home() {
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
  }, []);

  return (
    <div className="relative">
      {/* Background image section */}
      <div
        className="relative bg-cover bg-center h-[100vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold text-center px-4 py-2 md:px-6 md:py-4 shadow-xl animate-fadeInUp">
            Enduring Quality, Unbeatable Strength 
          </h1>
        </div>
      </div>

      {/* "Why choose us?" section */}
      <div className="bg-gray-100 py-12">
        <h1 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Why Choose Us?
        </h1>
        <p className="text-slate-600 text-lg md:text-xl lg:text-2xl text-center px-6 md:px-12 max-w-4xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore suscipit facere repudiandae aspernatur minima voluptate, 
          accusantium quibusdam maxime quia dolores temporibus dolor cum neque laboriosam quod nobis deserunt vitae nihil modi. 
          Corrupti doloremque quibusdam quidem, odio nisi incidunt temporibus ratione blanditiis iure quae recusandae expedita 
          voluptates dolor dolores, dolore corporis.
        </p>
      </div>

      {/* Company Factsheet section */}
      <div className="bg-white py-12">
        <h1 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Company Factsheet
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <FactCard
            icon={<FaBalanceScale className="text-slate-700" />}
            title="Legal Status of Firm"
            description="Private Limited Company"
          />
          <FactCard
            icon={<FaGavel className="text-slate-700" />}
            title="GST No."
            description="19AAACQ2101K1ZO"
          />
          <FactCard
            icon={<FaIndustry className="text-slate-700" />}
            title="Nature of Business"
            description="Manufacturing"
          />
          <FactCard
            icon={<FaChartLine className="text-slate-700" />}
            title="Turnover"
            description="25-30 cr"
          />
          <FactCard
            icon={<FaCalendarAlt className="text-slate-700" />}
            title="Established"
            description="2018"
          />
          <FactCard
            icon={<FaUsers className="text-slate-700" />}
            title="Employees"
            description="200+"
          />
        </div>
      </div>
    </div>
  );
}

function FactCard({ icon, title, description }) {
  return (
    <div className="flex items-center space-x-4 p-6 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <div className="text-5xl">{icon}</div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <p className="text-lg text-slate-600">{description}</p>
      </div>
    </div>
  );
}
