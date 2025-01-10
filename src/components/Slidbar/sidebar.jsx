import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaFileAlt,
  FaChevronDown,
  FaUser,
  FaPaperPlane,
  FaHistory,
} from "react-icons/fa";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlinePhotoLibrary, MdLocalLibrary } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    student: false,
    subscription: false,
  });

  const toggleDropdown = (section) => {
    setDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex ">
      {/* Mobile toggle button */}
      <button
        className="md:hidden p-4 bg-gray-800 text-white"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <IoMdArrowRoundForward size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`left-0 bg-gray-800 text-white transition-all duration-300 ${
          sidebarOpen ? "w-96" : "w-0"
        } md:w-64 h-screen overflow-y-auto z-50`}
      >
        <div className={`space-y-6 px-4 pt-6 ${!sidebarOpen && "hidden md:block"}`}>
          {/* Close Button */}
          {sidebarOpen && (
            <button
              className="absolute right-4 text-white md:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <IoMdArrowRoundBack size={24} />
            </button>
          )}

          {/* Dashboard Section */}
          <div>
            <h3 className="text-lg text-gray-500 font-semibold">Dashboard</h3>
            <div className="flex items-center space-x-3 mt-4">
              <MdOutlinePhotoLibrary size={20} />
              <Link to="/librarymanagement" onClick={()=>setSidebarOpen(false)} className="text-white hover:underline">
                Library Management
              </Link>
            </div>
            <div className="flex items-center space-x-3 mt-4">
              <MdLocalLibrary size={20} />
              <Link to="/bookmanagement" onClick={()=>setSidebarOpen(false)} className="text-white hover:underline">
                Book Management
              </Link>
            </div>
          </div>

          <hr className="border-gray-600 mt-4" />

          {/* Inventory Section */}
          <div>
            <h3 className="text-lg text-gray-500 font-semibold mt-6">
              Inventory
            </h3>
            <div className="flex items-center space-x-3 mt-4">
              <IoAddOutline size={20} />
              <Link to="/addnew" onClick={()=>setSidebarOpen(false)} className="hover:underline">Add New</Link>
            </div>
          </div>

          <hr className="border-gray-600 mt-4" />

          {/* Student Section */}
          <div>
            <h3 className="text-lg text-gray-500 font-semibold mt-6">Student</h3>
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => toggleDropdown("student")}
            >
              <FaUsers size={20} />
              <span>Manage Students</span>
              <FaChevronDown size={14} />
            </div>
            {dropdowns.student && (
              <div className="ml-6 mt-2 space-y-3">
                <div className="flex items-center space-x-3">
                  <IoAddOutline size={20} />
                  <Link to="/addnewstudent" onClick={()=>setSidebarOpen(false)} className="hover:underline">
                    Add New
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <FaUser size={20} />
                  <Link to="/userall" onClick={()=>setSidebarOpen(false)} className="hover:underline">All Users</Link>
                </div>
              </div>
            )}
          </div>

          <hr className="border-gray-600 mt-4" />

          {/* Subscription Section */}
          <div>
            <h3 className="text-lg text-gray-500 font-semibold mt-6">
              Subscription
            </h3>
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => toggleDropdown("subscription")}
            >
              <FaFileAlt size={20} />
              <span>Subscription</span>
              <FaChevronDown size={14} />
            </div>
            {dropdowns.subscription && (
              <div className="ml-6 mt-2 space-y-3">
                <div className="flex items-center space-x-3">
                  <FaPaperPlane size={20} />
                  <Link to="/plans" onClick={()=>setSidebarOpen(false)} className="hover:underline">Plans</Link>
                </div>
                <div className="flex items-center space-x-3">
                  <FaHistory size={20} />
                  <Link to="/purchasehistory" onClick={()=>setSidebarOpen(false)} className="hover:underline">
                    Purchase History
                  </Link>
                </div>
              </div>
            )}
          </div>

          <hr className="border-gray-600 mt-4" />
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-blue-500 bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;







