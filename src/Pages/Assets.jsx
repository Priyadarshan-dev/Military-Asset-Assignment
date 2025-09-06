import React from 'react'
import AssetTable from '../Components/AssetTable'

function Assets() {
  return (
    <>
      <div className='lg:pt-[50px] lg:pl-[72px] lg:pr-[50px] px-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-semibold text-gray-900'>Assets</h1>
          <div className='flex space-x-3'>
            <button className='h-[37px] w-[102px] bg-white shadow flex justify-center items-center rounded-lg gap-2'>
              <img
                src="/assets/images/filter.png"
                alt="cube icon"
                className="h-4 w-4"
              />
              Filters
            </button>
            <button className='h-[37px] w-[130px] btn-primary shadow flex justify-center items-center rounded-lg gap-2 '>
              <img
                src="/assets/images/plus.png"
                alt="cube icon"
                className="h-4 w-4 invert brightness-0"
              />
              Add Asset
            </button>
          </div>
        </div>
        <AssetTable></AssetTable>
      </div>
    </>
  )
}

export default Assets