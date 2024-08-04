import React from 'react';
import backgroundImage from '../assets/bg.jpeg';

export default function Home() {
  return (
    <div
      className="relative bg-cover bg-center h-[60vh]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold text-center px-4 py-2 md:px-6 md:py-4 shadow-lg">
          One stop solution for all your Pin and Wire needs!
        </h1>
      </div>
    </div>
  );
}
