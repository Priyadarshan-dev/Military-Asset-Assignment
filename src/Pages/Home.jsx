import React, { useState } from 'react';
import Sidebar from '../Layouts/Sidebar';
import Navbar from '../Layouts/Navbar';
import Body from '../Layouts/Body';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out 
        w-[250px] bg-[rgb(13,19,33)] md:translate-x-0 md:static md:flex z-40`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className=" flex flex-col">
        <Navbar 
          isSidebarOpen={isSidebarOpen}
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        <Body />
      </div>
    </div>
  );
}

export default Home;
