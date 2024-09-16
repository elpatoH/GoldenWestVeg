import React, { useEffect, useState } from 'react';

const TestimonialCard = () => {
  const [scrollY, setScrollY] = useState(0);

  // Update the scrollY state whenever the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden">
      {/* Floating Vegetable Images */}
      <img
        src="path_to_vegetable_1" // Replace with actual vegetable image
        alt="Vegetable"
        className="absolute w-16 h-16 top-20 left-10 animate-float"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }} // Scroll effect
      />
      <img
        src="path_to_vegetable_2"
        alt="Vegetable"
        className="absolute w-20 h-20 top-40 right-10 animate-float"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <img
        src="path_to_vegetable_3"
        alt="Vegetable"
        className="absolute w-12 h-12 bottom-20 left-20 animate-float"
        style={{ transform: `translateY(${scrollY * 0.7}px)` }}
      />

      {/* Testimonial Card */}
      <div className="max-w-4xl w-full p-10 bg-white rounded-lg shadow-lg z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
            <div className="w-32 h-32 bg-green-400 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="path_to_image" // replace this with the actual image URL
                alt="Colin Whalen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-semibold text-gray-900">
              "Every day and in every way, Evernote is there for my work and my life. It's my most used app, both at my desk and in my pocket."
            </p>
            <p className="mt-6 font-bold text-xl text-gray-700">COLIN WHALEN, EVERNOTE CERTIFIED EXPERT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
