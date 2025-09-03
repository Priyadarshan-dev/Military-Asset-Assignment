import React from 'react';
import Sidebar from '../Layouts/Sidebar';
import Navbar from '../Layouts/Navbar';
import Body from '../Layouts/Body'

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
