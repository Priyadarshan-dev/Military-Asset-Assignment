import React from 'react';
import Sidebar from '../Layout/Sidebar';
import Navbar from '../Layout/Navbar';

function Home({ children }) {   
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Navbar />
        <div className='p-4'>
          {children} 
        </div>
      </div>
    </div>
  );
}

export default Home;
