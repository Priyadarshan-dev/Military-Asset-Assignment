import React from 'react';

function Navbar({ isSidebarOpen, onMenuClick }) {
  return (
    <div className="p-5 bg-white shadow flex justify-between items-center pr-5 pt-3 relative">
      {/* Hamburger icon - only visible on mobile */}
      <button 
        className={`text-2xl fixed top-5 z-50 transition-all duration-300 
          ${isSidebarOpen ? 'left-[260px]' : 'left-5'} 
        lg:hidden`}
        onClick={onMenuClick}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <div className="flex gap-4 ml-auto"> 
        <i className="fa-regular fa-bell text-xl sm:text-2xl pt-2"></i>
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 border-2 sm:border-4 border-white"></div>
      </div>
    </div>
  );
}

export default Navbar;