import React from 'react';
import { FaPhone, FaEnvelope, FaBuilding } from 'react-icons/fa';
import { MdFactory } from 'react-icons/md';

export default function Contact() {
  return (
    <div className="p-6 max-w-screen-lg mx-auto bg-white shadow-md rounded-lg mt-12 flex flex-col lg:flex-row">
      <div className="flex-1">
        <div className="flex items-center mb-4">
          <FaBuilding size={30} className="text-blue-500 mr-3" />
          <div>
            <h3 className="text-lg font-semibold">Registered Office</h3>
            <p className="text-gray-600">29/3 B.T. Road, Kolkata – 700056</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <MdFactory size={30} className="text-green-500 mr-3" />
          <div>
            <h3 className="text-lg font-semibold">Registered Factory</h3>
            <p className="text-gray-600">Chanditala Industrial Park, Roypara Chanditala, Hooghly – 712702</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <FaPhone size={30} className="text-red-500 mr-3" />
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-600">+91 6291729671</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaEnvelope size={30} className="text-purple-500 mr-3" />
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-600">nimitsodhani1@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 lg:ml-6 mt-8 lg:mt-0">
        <h3 className="text-lg font-semibold mb-2">Find Us on the Map</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58894.53953910031!2d88.28909945149249!3d22.694441655470253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f883fa64aa0b59%3A0x994c2b8106ff5806!2sCIP%20.Chanditala%20Industrial%20Park!5e0!3m2!1sen!2sin!4v1722786702591!5m2!1sen!2sin%22"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
