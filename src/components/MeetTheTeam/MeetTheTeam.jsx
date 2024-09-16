import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react';

export default function MeetTheTeam() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-100">
      {/* Headline */}
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        Meet the Team
      </h2>

      {/* Button */}
      <Button
        as={Link}
        to="/team"
        className="px-8 py-3 bg-gray-900 text-white text-lg font-semibold rounded-md hover:bg-gray-800 transition duration-300 ease-in-out"
      >
        Go to Team Page
      </Button>
    </div>
  );
};