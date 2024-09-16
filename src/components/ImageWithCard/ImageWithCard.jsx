import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';

import smallVegetablePatch from "../../imgs/smallVegetablePatch.webp";

const SeasonalSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-white">
      <div className="relative">
        {/* Image section */}
        <div className="relative h-96 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={smallVegetablePatch}
            alt="Vegetable Photo"
          />
        </div>

        {/* Text section */}
        <div className="absolute inset-0 flex flex-col justify-center p-8 bg-gray-900 bg-opacity-75 text-white z-10 md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">What is in Season?</h2>
          <p className="mb-6">Get a list of fruits and vegetables that are in season right now.</p>
          <button
            className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition"
            onClick={() => setIsOpen(true)}
          >
            Seasonal Produce
          </button>
        </div>
      </div>

      {/* Modal using Headless UI */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-10">
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
          <DialogPanel className="bg-white p-6 rounded-md">
            <DialogTitle className="text-lg font-bold">Seasonal Produce List</DialogTitle>
            <Description className="mt-2">
              Here is a list of fruits and vegetables that are in season.
            </Description>
            <button
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default SeasonalSection;
