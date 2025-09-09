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
          <div className='mt-4 p-4 bg-gray-100 border rounded-lg'>
            <p className='text-sm text-gray-700'>Filter box.</p>
          </div>
        )}

        <AssetTable />
      </div>
    </>
  )
}

export default Assets
