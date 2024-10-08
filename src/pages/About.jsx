import React from 'react';
import dw2 from '../assets/dw2.webp'; 
import dw1 from '../assets/dw1.webp'; 

export default function About() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-10'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 mb-6'>About Us</h1>
      
      {/* First Row */}
      <div className='flex flex-col md:flex-row items-center mb-12 w-full max-w-4xl'>
        <img
          src={dw1}
          alt="Company"
          className='w-full md:w-1/2 max-h-72 object-cover mb-4 md:mb-0 rounded-lg'
        />
        <div className='text-lg text-gray-700 leading-relaxed p-4 md:p-8'>
          Established in the year 2018 at North 24 Parganas, West Bengal, we "Daksh Wire And Pin Private Limited” are a 
          Limited Company (Ltd./Pvt.Ltd.) firm, engaged as the foremost manufacturer of High Carbon Spring Wire, 
          High Carbon Umbrella Wire, High Carbon Shutter Wire, High Carbon Mesh Wire, High Carbon Needle Wires,
           and Mild Steel Mesh Wires.
        </div>
      </div>
      
      {/* Second Row */}
      <div className='flex flex-col md:flex-row-reverse items-center w-full max-w-4xl'>
        <img
          src={dw2}
          alt="Company"
          className='w-full md:w-1/2 max-h-72 object-cover mb-4 md:mb-0 rounded-lg'
        />
        <div className='text-lg text-gray-700 leading-relaxed p-4 md:p-8'>
          At Daksh Wire and Pin Pvt Ltd., we manufacture premium quality custom wire products for customers in a wide range of 
          industries. Our wire drawing capabilities include the ability to produce wire between 11mm and 0.70 mm in diameter using
          precision drawing dies. Everything we manufacture is custom, freeing customers to select the exact alloy, diameter, and
          packaging method to best suit their given application. Our “ultra finish” option provides the best surface finish and
          meets the tightest diameter tolerances in the industry. Custom wire can be drawn in any quantity and packaged as coils 
          or cut to length, depending on the application. Lead times are evaluated on a job by job basis.
        </div>
      </div>
    </div>
  );
}//fix
