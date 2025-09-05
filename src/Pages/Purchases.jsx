import React from 'react'
import PurchasesTable from '../Components/PurchasesTable'

function Purchases() {
  return (
    <>
      <div className='pt-[50px] pl-[72px] justify-start pr-[50px]'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-semibold text-gray-900'>Purchases</h1>
          <div className='flex space-x-3'>
            <button className='h-[37px] w-[102px] bg-white shadow flex justify-center items-center rounded-lg gap-2'>
              <img
                src="/assets/images/filter.png"
                alt="cube icon"
                className="h-4 w-4"
              />
              Filters</button>
            <button className='h-[37px] w-[180px] btn-primary shadow flex justify-center items-center rounded-lg gap-2 '>
              <img
                src="/assets/images/plus.png"
                alt="cube icon"
                className="h-4 w-4 invert brightness-0"
              />
              New Purchase
            </button>
          </div>
        </div>
        <PurchasesTable></PurchasesTable>
      </div>
    </>
  )
}

export default Purchases