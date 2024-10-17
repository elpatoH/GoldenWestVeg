import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import fieldWorkersImage from "../../imgs/fieldWorkers.webp"

export default function About() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${fieldWorkersImage})`,
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Centered Text */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About Golden West Vegetables
          </h1>
          <p className="text-lg md:text-2xl text-white mt-4 max-w-3xl">
            At Golden West Vegetables, we are dedicated to providing fresh, high-quality produce with a focus on sustainability and customer satisfaction. Our services range from custom growing to reliable delivery, ensuring that our customers always get the best.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-green-800">
          Our Commitment to Quality
        </h2>
        <p className="mb-8 text-base md:text-lg text-center text-gray-700 max-w-2xl mx-auto">
          At Golden West Vegetables, we pride ourselves on providing fresh, high-quality vegetables that are grown with care and attention. Our team is focused on delivering the best products while ensuring sustainable practices.
        </p>

        {/* Headless UI Accordion (Disclosure) for services */}
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-4 shadow-md">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-100 px-4 py-2 text-left text-base md:text-lg font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span>Our Services</span>
                  <ChevronUpIcon
                    className={`${open ? 'transform rotate-180' : ''} h-5 w-5 text-green-900`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700">
                  <ul className="list-disc list-inside">
                    <li>Custom Growing</li>
                    <li>Vegetable Delivery</li>
                    <li>Maquiladora Services</li>
                    <li>Wholesale Supply</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-100 px-4 py-2 text-left text-base md:text-lg font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span>Our Mission</span>
                  <ChevronUpIcon
                    className={`${open ? 'transform rotate-180' : ''} h-5 w-5 text-green-900`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700">
                  Our mission is to deliver the freshest, highest-quality vegetables, grown with care and expertise. We strive to be leaders in the agricultural industry, committed to sustainability and customer satisfaction.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        {/* Closing Paragraph */}
        <p className="mt-12 text-base md:text-lg text-center text-gray-700 max-w-xl mx-auto">
          Thank you for choosing Golden West Vegetables. We're committed to meeting all your fresh produce needs with unmatched dedication and service.
        </p>
      </div>
    </div>
  );
}
