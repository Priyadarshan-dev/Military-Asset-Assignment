import React, { useState } from 'react' // 👈 Add useState
import AssetTable from '../Components/AssetTable'
import { Link } from "react-router-dom";

function Assets() {
  const [showFilters, setShowFilters] = useState(false) // 👈 State for toggle

  return (
    <>
      <div className='lg:pt-[50px] lg:pl-[72px] lg:pr-[50px] px-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-semibold text-gray-900'>Assets</h1>
          <div className='flex space-x-3'>
            {/* 🔥 Toggle filter box */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className='h-[37px] w-[102px] bg-white shadow flex justify-center items-center rounded-lg gap-2'
            >
              <img
                src="/assets/images/filter.png"
                alt="cube icon"
                className="h-4 w-4"
              />
              Filters
            </button>

            <Link
              to="/assets/new"
              className="h-[37px] w-[130px] btn-primary shadow flex justify-center items-center rounded-lg gap-2"
            >
              <img
                src="/assets/images/plus.png"
                alt="cube icon"
                className="h-4 w-4 invert brightness-0"
              />
              Add Asset
            </Link>
          </div>
        </div>
        {/* 🔥 Show filter box if showFilters is true */}
        {showFilters && (
          <div className="mt-4 h-[200px] bg-white rounded-lg shadow">
            {/* Header */}
            <div className="pt-5 px-5 flex justify-between items-center">
              <h1 className="text-lg font-semibold">Filters</h1>
              <h1 className="cursor-pointer">X</h1>
            </div>

            {/* Select Row */}
            <div className="flex gap-4 px-5 mt-4">
              {/* Base Select */}
              <div className="flex flex-col flex-1">
                <h1 className="mb-1 text-sm sm:text-base">Base</h1>
                <select className="bg-white shadow rounded-lg  border h-5 border-gray-300 text-sm sm:text-base">
                  <option value="" hidden>Select Base</option>
                  <option>Base Alpha</option>
                  <option>Base Bravo</option>
                  <option>Base Charlie</option>
                </select>
              </div>

              {/* Asset Select */}
              <div className="flex flex-col flex-1">
                <h1 className="mb-1 text-sm sm:text-base">Asset Name</h1>
                <select className="bg-white shadow rounded-lg h-5 border border-gray-300 text-sm sm:text-base">
                  <option value="" hidden>Select Type</option>
                  <option>Vehicle</option>
                  <option>Weapon</option>
                  <option>Ammunition</option>
                  <option>Equipment</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <h1 className="mb-1 text-sm sm:text-base">Search </h1>
                <input type="text" placeholder='Search by name' className='bg-white shadow h-5 rounded-lg border border-gray-300 ' />
              </div>
            </div>
            <div className='flex justify-end px-5 mt-5 gap-5'>
              <button className='h-[40px] w-[80px] rounded bg-white shadow '>
                Reset
              </button>
              <button className='h-[40px] w-[160px] rounded bg-blue-500 text-white shadow '>
                Apply Filters
              </button>
            </div>
          </div>
        )}
        <AssetTable />
      </div>
    </>
  )
}

export default Assets
