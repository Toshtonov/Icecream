import React from 'react'
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-pink-100 via-white to-blue-100 flex flex-col justify-center items-center px-4">
      {/* Title */}
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-gray-700 text-center">
        Sorry! The Page Not Found ;(
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 text-center mt-4 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Button */}
      <Link to="/" className="mt-6 w-full sm:w-auto">
        <button className="bg-[#F83D8E] flex items-center justify-center gap-2 py-3 px-6 w-full sm:w-auto rounded-full text-white font-medium shadow-md hover:bg-pink-600 transition">
          <ArrowLeft size={20} />
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
