import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      {/* Logo with Shorter Horizontal Lines */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-600"></div>
        <img
          src="/path/to/logo.png"
          alt="Logo"
          className="mx-4 h-10" /* Replace with your logo path */
        />
        <div className="w-1/4 h-px bg-gray-600"></div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* San Diego Location */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">SAN DIEGO</h3>
            <p>7692 Trade St. Unit C<br />San Diego, CA 92121</p>
            <p className="text-yellow-400">(858) 956-2878</p>
          </div>

          {/* Hours of Operation */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">HOURS OF OPERATION</h3>
            <p>Monday - Friday<br />6:00 AM - 2:00 PM</p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-yellow-400 p-3 rounded-full shadow-lg hover:bg-gray-300 transition-colors"
        >
          ⬆️
        </button>
      </div>

      {/* Trademark */}
      <div className="text-center mt-8 text-gray-400">
        &copy; 2024 Daniel Gil. All rights reserved. <br />
      </div>
    </footer>
  );
}