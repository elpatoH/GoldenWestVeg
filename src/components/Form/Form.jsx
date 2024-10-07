import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    questionType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-4xl font-bold mb-6">Get in touch</h2>
      <p className="text-xl mb-8">
        Thanks for your interest. Fill out the form below, and we’ll get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Question Type Dropdown */}
        <div>
          <label htmlFor="questionType" className="block text-lg font-medium text-gray-700">
            I have a general question about:
          </label>
          <select
            name="questionType"
            id="questionType"
            value={formData.questionType}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select an option</option>
            <option value="service">Service</option>
            <option value="support">Support</option>
            <option value="pricing">Pricing</option>
          </select>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">
              First Name <span className="text-red-500">(Required)</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">
              Last Name <span className="text-red-500">(Required)</span>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email <span className="text-red-500">(Required)</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-lg font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        {/* CAPTCHA (Placeholder) */}
        <div className="flex items-center">
          <input type="checkbox" id="captcha" required className="mr-2" />
          <label htmlFor="captcha" className="text-gray-700">
            I'm not a robot
          </label>
        </div>

        {/* Submit Button */}
        <div>
            <button
                type="submit"
                className="w-full bg-yellow-400 text-black border border-gray-300 py-2 px-4 rounded-md shadow-none hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-in-out focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
                Submit
            </button>
        </div>


      </form>
    </div>
  );
};

export default ContactForm;
