import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar with same responsive behavior as Home */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out 
        w-[250px] bg-[rgb(13,19,33)] md:translate-x-0 md:static md:flex z-40`}
      >
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Pass toggle function to Navbar */}
        <Navbar 
          isSidebarOpen={isSidebarOpen}
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        <div className="p-4">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
}

export default Layout;