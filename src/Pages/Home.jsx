import React from 'react';
import Sidebar from '../Layout/Sidebar';
import Navbar from '../Layout/Navbar';
import Body from '../Layout/Body'

function Home({ children }) {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Navbar />
        <Body></Body>
      </div>
    </div>
  );
}

export default Home;
