import React from 'react'
import AssetTable from '../Components/AssetTable'

function Assets() {
  return (
    <>
      <div className='pt-[50px] pl-[72px] justify-start pr-[50px]'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-semibold text-gray-900'>Assets</h1>
          <div className='flex space-x-3'>
            <button className='h-[37px] w-[102px] bg-white shadow flex justify-center items-center rounded-lg'>Filter</button>
            <button className='h-[37px] w-[130px] bg-text-primary-600 shadow flex justify-center items-center rounded-lg'>Add Asset</button>
          </div>
        </div>
        <AssetTable></AssetTable>
      </div>
    </>
  )
}

export default Assets