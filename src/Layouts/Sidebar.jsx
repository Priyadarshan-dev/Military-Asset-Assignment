import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation(); // 👈 Get current URL path

  const linkClass = (path) =>
    `flex justify-start mt-2 gap-3 p-2 rounded-md cursor-pointer 
    ${location.pathname === path ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'} `;

  return (
    <div className='h-screen w-[250px] bg-[rgb(13,19,33)] flex flex-col justify-items-start pl-3 pt-1'>
      <h1 className='text-white text-xl font-bold'>Military Asset Management</h1>

      <Link to="/home">
        <div className={linkClass('/home')}>
          <i className="fa-regular fa-house text-white text-xl"></i>
          <h1 className='text-gray-300 group flex items-center text-sm font-medium rounded-md'>Dashboard</h1>
        </div>
      </Link>

      <Link to="/assets">
        <div className={linkClass('/assets')}>
          <i className="fa-solid fa-cube text-white text-xl"></i>
          <h1 className='text-gray-300 group flex items-center text-sm font-medium rounded-md'>Assets</h1>
        </div>
      </Link>

      <Link to="/transfers">
        <div className={linkClass('/transfers')}>
          <i className="fa-regular fa-truck text-white text-xl"></i>
          <h1 className='text-gray-300 group flex items-center text-sm font-medium rounded-md'>Transfers</h1>
        </div>
      </Link>

      <Link to="/purchases">
        <div className={linkClass('/purchases')}>
          <i className="fa-solid fa-cart-shopping text-white text-xl"></i>
          <h1 className='text-gray-300 group flex items-center text-sm font-medium rounded-md'>Purchases</h1>
        </div>
      </Link>

      <Link to="/assignments">
        <div className={linkClass('/assignments')}>
          <i className="fa-solid fa-user text-white text-xl"></i>
          <h1 className='text-gray-300 group flex items-center text-sm font-medium rounded-md'>Assignments</h1>
        </div>
      </Link>

      <Link to="/expenditure">
        <div className={linkClass('/expenditure')}>
          <i className="fa-solid fa-box-archive text-white text-xl"></i>
          <h1 className='text-gray-300 group flex items-center text-sm font-medium rounded-md'>Expenditures</h1>
        </div>
      </Link>

      <Link to="/users">
        <div className={linkClass('/users')}>
          <i className="fa-solid fa-user text-white text-xl"></i>
          <h1 className='text-gray-300 group flex items-center text-sm font-medium rounded-md'>Users</h1>
        </div>
      </Link>

      <Link to="/settings">
        <div className={linkClass('/settings')}>
          <i className="fa-solid fa-gear text-white text-xl"></i>
          <h1 className='text-gray-300 group flex items-center text-sm font-medium rounded-md'>Settings</h1>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
