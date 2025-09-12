import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ isSidebarOpen, onMenuClick }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = (path) => {
    setOpen(false); // close dropdown
    navigate(path);
  };

  return (
    <div className="p-5 bg-white shadow flex justify-between items-center pr-5 pt-3 relative">
      {/* Hamburger icon - only visible on mobile */}
      <button
        className={`text-2xl fixed top-5 z-50 transition-all duration-300 
          ${isSidebarOpen ? "left-[260px]" : "left-5"} 
        lg:hidden`}
        onClick={onMenuClick}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Right side */}
      <div className="flex gap-4 ml-auto items-center relative" ref={menuRef}>
        <i className="fa-regular fa-bell text-xl sm:text-2xl"></i>

        {/* Profile button */}
        <div
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 border-2 sm:border-4 border-white flex items-center justify-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="font-semibold text-sm">S</span>
        </div>

        {/* Dropdown */}
        {open && (
          <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-40 py-2">
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => handleNavigate("/profile")}
            >
              Your Profile
            </button>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => handleNavigate("/settings")}
            >
              Settings
            </button>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
              onClick={() => handleNavigate("/")}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
