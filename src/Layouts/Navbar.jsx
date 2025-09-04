import React from 'react'

function Navbar() {
  return (
    <>
      <div className='p-5 bg-white shadow flex justify-end pr-5 pt-3'>
        <div className='flex gap-4'> 
          <i class="fa-regular fa-bell text-2xl pt-2"></i>
          <div className="w-10 h-10 rounded-full bg-gray-300 border-4 border-white"></div>
        </div>
      </div>
    </>
  )
}

export default Navbar