import React from 'react'
import PieChart from '../Charts/PieChart'
import BarChart from '../Charts/BarChart'

function Card3() {
    return (
        <>
            <div className='mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:pr-14 pr-4'>
                <div className='h-[412px] bg-white shadow rounded-lg flex flex-col justify-center'>
                    <div className="px-5  flex justify-between items-center">
                        <h1 className="text-lg leading-6 font-medium text-gray-900">
                            Assets by Type
                        </h1>
                    </div>
                    
                    <PieChart></PieChart>
                </div>
                <div className='h-[412px] bg-white shadow rounded-lg flex flex-col justify-center'>
                    <div className="px-5  flex justify-between items-center">
                        <h1 className="text-lg leading-6 font-medium text-gray-900">
                            Asset Availability
                        </h1>
                    </div>
                    <BarChart></BarChart>
                </div>
            </div>
        </>
    )
}

export default Card3