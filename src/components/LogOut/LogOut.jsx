import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  // Handle logout logic
  const handleLogout = () => {
    // Clear authentication details (e.g., remove tokens or user data from storage)
    localStorage.removeItem("authToken"); // Example: Remove token from localStorage
    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="relative flex items-center justify-center top-28">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Log Out</h2>
        <p className="text-gray-600 mb-6">We hope to see you back soon!</p>
        
        {/* Logout confirmation message */}
        <div className="mb-6">
          <span className="text-lg font-semibold text-gray-700 ">
            Are you sure you want to log out?
          </span>
        </div>

        {/* Logout and Cancel Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none transition-all duration-300"
          >
            Logout
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
