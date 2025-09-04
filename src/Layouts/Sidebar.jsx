import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {

    return (
        <div className='h-screen w-[250px] bg-[rgb(13,19,33)] flex flex-col justify-items-start pl-3 pt-1'>
            <h1 className='text-white text-xl font-bold'>Military Asset Management</h1>
            <Link to="/home">
                <div className='flex justify-start mt-7 gap-3'>
                    <i class="fa-regular fa-house text-white text-xl"></i>
                    <h1 className='text-gray-300 hover:text-white group flex items-center text-sm font-medium rounded-md'>Dashboard</h1>
                </div>
            </Link>
            <Link to="/assets">
                <div className='flex justify-start mt-5 gap-3'>
                    <i class="fa-solid fa-cube text-white text-xl"></i>
                    <h1 className='text-gray-300 hover:text-white group flex items-center text-sm font-medium rounded-md'>Assets</h1>
                </div>
            </Link>
            <Link to="/transfers">
                <div className='flex justify-start mt-5 gap-3'>
                    <i class="fa-regular fa-truck text-white text-xl"></i>
                    <h1 className='text-gray-300 hover:text-white group flex items-center text-sm font-medium rounded-md'>Transfers</h1>
                </div>
            </Link>
            <Link to="/purchases">
                <div className='flex justify-start mt-5 gap-3'>
                    <i class="fa-solid fa-cart-shopping  text-white text-xl"></i>
                    <h1 className='text-gray-300 hover:text-white group flex items-center text-sm font-medium rounded-md'>Purchases</h1>
                </div>
            </Link>
            <Link to="/assignments">
                <div className='flex justify-start mt-5 gap-3'>
                    <i class="fa-solid fa-user  text-white text-xl"></i>
                    <h1 className='text-gray-300 hover:text-white group flex items-center text-sm font-medium rounded-md'>Assignments</h1>
                </div>
            </Link>
            <Link to="/expenditure">
                <div className='flex justify-start mt-5 gap-3'>
                    <i class="fa-solid fa-box-archive text-white text-xl"></i>
                    <h1 className='text-gray-300 hover:text-white group flex items-center text-sm font-medium rounded-md'>Expenditures</h1>
                </div>
            </Link>
            <Link to="/users">
                <div className='flex justify-start mt-5 gap-3'>
                    <i class="fa-solid fa-user  text-white text-xl"></i>
                    <h1 className='text-gray-300 hover:text-white group flex items-center text-sm font-medium rounded-md'>Users</h1>
                </div>
            </Link>
            <Link to="/settings">
                <div className='flex justify-start mt-5 gap-3'>
                    <i class="fa-solid fa-gear  text-white text-xl"></i>
                    <h1 className='text-gray-300 hover:text-white group flex items-center text-sm font-medium rounded-md'>Settings</h1>
                </div>
            </Link>
        </div>
    )
} 

export default Sidebar