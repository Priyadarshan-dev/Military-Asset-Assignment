import React from 'react'

function Card1() {
    return (
        <>
            <div className='h-[80px] pl-4 mt-3 flex flex-wrap items-center w-[1150px] gap-5 bg-white shadow-md rounde-lg '>
                <div className='flex flex-col justify-between'>
                    <h1 className='mb-1'>Base</h1>
                    <div className='h-6 w-[350px] shadow-md rounded-2xl flex items-center px-3'>
                        <select
                            className='w-full bg-transparent border-none rounded-[6px] outline-none'
                        >
                            <option value="" hidden>All Bases</option>
                            <option>All Bases</option>
                            <option>Base Alpha</option>
                            <option>Base Bravo</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h1>Asset Type</h1>
                    <div className='h-6 w-[350px] shadow-md rounded-2xl flex items-center px-3'>
                        <select
                            className='w-full bg-transparent border-none outline-none'
                        >
                            <option value="" hidden>Asset Type</option>
                            <option>All Types</option>
                            <option>Vechile</option>
                            <option>Weapon</option>
                            <option>Ammunation</option>
                            <option>Equipment</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-medium'>Date Range</h1>
                    <div className='flex items-center space-x-2'>
                        <input
                            type="date"
                            placeholder="dd-mm-yyyy"
                            className='border rounded-md w-44'
                        />
                        <span>to</span>
                        <input
                            type="date"
                            placeholder="dd-mm-yyyy"
                            className='border rounded-md w-44'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card1