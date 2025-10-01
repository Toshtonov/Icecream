import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-purple-100 px-6">
      <div className="flex flex-col items-center text-center max-w-xl animate-fadeIn">
        
        {/* Smiley Icon */}
        <div className="mb-8">
          <img
            src="src/images/thankyou-image.png.png"
            alt="Thank You Illustration"
            className="max-w-xs sm:max-w-sm mx-auto drop-shadow-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 font-serif">
          Thank You!
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 px-4">
          We're delighted you've decided to treat yourself to our delectable ice creams. <br />
          Your order has been received and is now being prepared with care.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 text-white font-medium rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
