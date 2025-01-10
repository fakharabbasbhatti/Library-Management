import React from "react";

const Plans = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">

      {/* Subscription Plans Section */}
      <h2 className=" text-2xl font-bold sm:text-4xl sm:font-bold text-center text-gray-900 mb-12">
        Choose Your Plan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Plan 1 */}
        <div className="bg-white shadow-2xl rounded-lg p-8 hover:shadow-3xl transition duration-300 transform hover:scale-105">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-4">Basic Plan</h3>
          <p className="text-gray-600 text-center mb-6">For individuals who want access to basic features.</p>
          <p className="text-4xl font-bold text-gray-800 text-center mb-6">$5 <span className="text-lg text-gray-600">/ Month</span></p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Access to 50 books</li>
            <li>Basic search features</li>
            <li>Email support</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full w-full focus:outline-none transition duration-200 ease-in-out">
            Subscribe Now
          </button>
        </div>

        {/* Plan 2 */}
        <div className="bg-white shadow-2xl rounded-lg p-8 hover:shadow-3xl transition duration-300 transform hover:scale-105">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-4">Standard Plan</h3>
          <p className="text-gray-600 text-center mb-6">Perfect for small teams or casual users.</p>
          <p className="text-4xl font-bold text-gray-800 text-center mb-6">$10 <span className="text-lg text-gray-600">/ Month</span></p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Access to 200 books</li>
            <li>Advanced search features</li>
            <li>Priority email support</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full w-full focus:outline-none transition duration-200 ease-in-out">
            Subscribe Now
          </button>
        </div>

        {/* Plan 3 */}
        <div className="bg-white shadow-2xl rounded-lg p-8 hover:shadow-3xl transition duration-300 transform hover:scale-105">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-4">Premium Plan</h3>
          <p className="text-gray-600 text-center mb-6">For power users and libraries needing advanced features.</p>
          <p className="text-4xl font-bold text-gray-800 text-center mb-6">$20 <span className="text-lg text-gray-600">/ Month</span></p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Access to 1000+ books</li>
            <li>Unlimited search features</li>
            <li>24/7 phone and email support</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full w-full focus:outline-none transition duration-200 ease-in-out">
            Subscribe Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Plans;
