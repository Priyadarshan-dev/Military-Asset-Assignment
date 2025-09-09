import React from 'react'

function Card1() {
    return (
        <div className='pr-4  pl-4 mt-3 flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-white shadow-md rounded-lg mr-4 lg:max-w-[1128px] py-4'>
            
            {/* Base */}
            <div className='flex flex-col justify-between w-full sm:flex-1 min-w-[200px]'>
                <h1 className='mb-1 text-sm sm:text-base'>Base</h1>
                <div className='h-5 w-full max-w-full shadow-md rounded-2xl flex items-center px-3'>
                    <select
                        className='w-full bg-transparent border-none rounded-[6px] outline-none text-sm sm:text-base'
                    >
                        <option value="" hidden>All Bases</option>
                        <option>All Bases</option>
                        <option>Base Alpha</option>
                        <option>Base Bravo</option>
                        <option>Base Charlie</option>
                    </select>
                </div>
            </div>

            {/* Asset Type */}
            <div className='flex flex-col w-full sm:flex-1 min-w-[200px]'>
                <h1 className='text-sm sm:text-base'>Asset Type</h1>
                <div className='h-5 w-full max-w-full shadow-md rounded-2xl flex items-center px-3'>
                    <select
                        className='w-full bg-transparent border-none outline-none text-sm sm:text-base'
                    >
                        <option value="" hidden>Asset Type</option>
                        <option>All Types</option>
                        <option>Vehicle</option>
                        <option>Weapon</option>
                        <option>Ammunition</option>
                        <option>Equipment</option>
                        <option>Other</option>
                    </select>
                </div>
            </div>

            {/* Date Range */}
            <div className='flex flex-col w-full sm:flex-1 min-w-[200px]'>
                <h1 className='font-medium text-sm sm:text-base'>Date Range</h1>
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
                    <input
                        type="date"
                        placeholder="dd-mm-yyyy"
                        className='border rounded-md h-5 w-full sm:w-auto px-2 py-1 text-sm'
                    />
                    <span className='hidden sm:block'>to</span>
                    <input
                        type="date"
                        placeholder="dd-mm-yyyy"
                        className='border rounded-md w-full h-5 sm:w-auto px-2 py-1 text-sm'
                    />
                </div>
            </div>
        </div>
    )
}

export default Card1