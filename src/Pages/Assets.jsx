import React from 'react'
import AssetTable from '../Components/AssetTable'

function Assets() {
  return (
    <>
      <div className='pt-[50px] pl-[72px] justify-start pr-[50px]'>
        <div className='flex justify-between'>
          <h1>Assets</h1>
          <button className='h-[37px] w-[108px] border rounded'>Filters</button>
          <button className='h-[37px] w-[108px] border rounded'>Add Asset</button>
        </div>
        <AssetTable></AssetTable>
      </div>
    </>
  )
}

export default Assets