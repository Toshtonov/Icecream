import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl w-full bg-white shadow-lg rounded-2xl overflow-hidden">
        
        {/* Header Section */}
        <header className="bg-gradient-to-r from-pink-100 via-white to-blue-100 p-8 sm:p-12 border-b">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-['Berkshire_Swash']">
            Terms and Conditions
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Welcome to <span className="font-semibold text-pink-600">[Your Online Education Platform]</span>! 
            Before accessing or using our website, please read these Terms and Conditions carefully. 
            By accessing or using any part of the site, you agree to be bound by these Terms.
          </p>
        </header>

        {/* Content Section */}
        <section className="p-6 sm:p-10 space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          {[
            {
              title: "1. Use of Website",
              text: "Your use of our website is subject to these Terms and Conditions. You must be at least 18 years old to use our services.",
            },
            {
              title: "2. User Account",
              text: "You are responsible for maintaining the confidentiality of your account and password. You agree to provide accurate and complete information when creating an account.",
            },
            {
              title: "3. Intellectual Property",
              text: "All content on this website, including text, graphics, logos, and images, is the property of [Your Online Education Platform] and protected by copyright laws. You may not reproduce, distribute, or transmit any content without prior written consent.",
            },
            {
              title: "4. Payment and Billing",
              text: "Payment for our services is required in advance. All fees are non-refundable.",
            },
            {
              title: "5. Termination",
              text: "We reserve the right to suspend or terminate your account at any time for violation of these Terms and Conditions. You have the right to access, update, or delete your personal information at any time. You can opt out of receiving promotional emails by following the instructions provided in the email.",
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="bg-gray-50 hover:bg-gray-100 transition rounded-xl p-5 border"
            >
              <h2 className="font-semibold text-gray-900">{section.title}</h2>
              <p className="mt-2 text-gray-600">{section.text}</p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="p-6 sm:p-8 border-t text-center">
          <p className="text-xs text-gray-400 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition">
            Agree & Continue
          </button>
        </footer>
      </article>
    </div>
  );
}
