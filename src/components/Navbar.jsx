import React, { useState, useEffect } from "react";
import { FaSearch, FaCaretDown, FaBars } from "react-icons/fa"; // Import icons
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdownOnClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", closeDropdownOnClickOutside);
    return () => document.removeEventListener("click", closeDropdownOnClickOutside);
  }, []);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between px-4 py-3 bg-gray-900 text-white shadow-md relative z-10">
      {/* Heading at the start */}
      <div className="text-xl font-bold flex-shrink-0">BRS LIBRARY</div>

      {/* Hamburger Menu Icon (Visible on small screens) */}
      <button
        className="text-white text-2xl md:hidden focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <FaBars />
      </button>

      {/* Search Bar and Profile Section (Hidden on mobile when menu is closed) */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-900 text-white transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:static md:flex md:flex-1 md:justify-end md:items-center md:space-x-4 md:translate-x-0`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 p-4 md:p-0">
          {/* Close button for mobile menu */}
          <button
            className="self-end mb-4 text-white text-xl md:hidden"
            onClick={toggleMobileMenu}
          >
            ✖
          </button>

          {/* Search Bar */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300 w-full md:w-auto"
            />
            <button className="text-white bg-blue-600 p-2 rounded-md">
              <FaSearch size={20} /> {/* Search icon */}
            </button>
          </div>

          {/* Profile Section */}
          <div className="relative flex items-center space-x-2 mt-2 md:mt-0 dropdown">
            {/* Profile Picture */}
            <img
              src={logo}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {/* Admin Heading with Dropdown Icon */}
            <div
              className="flex items-center space-x-1 cursor-pointer"
              onClick={toggleDropdown}
            >
              <span>Admin</span>
              <FaCaretDown />
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                className="absolute top-10 left-4 mt-2 w-24 bg-white text-black rounded-lg shadow-lg z-10"
              >
                <ul className="py-4">
                  <li>
                    <Link
                      to="/profile" onClick={toggleMobileMenu}
                      className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login" onClick={toggleMobileMenu}  
                      className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/logout" onClick={toggleMobileMenu}
                      className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
