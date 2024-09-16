import React, { useEffect, useState } from 'react';
import profilePicBlank from '../../imgs/profilePicBlank.webp'

const TestimonialCard = () => {

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden">
      {/* Testimonial Card */}
      <div className="max-w-4xl w-full p-10 bg-white rounded-lg shadow-lg z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
            <div className="w-32 h-32 bg-green-400 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={profilePicBlank}
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-semibold text-gray-900">
            Fresh, vibrant, and full of flavor — this company’s produce has redefined what it means to eat healthy. Every bite feels like it’s straight from the garden, and their commitment to sustainability makes them a company you can truly feel good about supporting.
            </p>
            <p className="mt-6 font-bold text-xl text-gray-700">John Doe, Consumer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
