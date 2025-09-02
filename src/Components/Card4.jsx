import React from 'react'

function Card4() {
    return (
        <>
            <div className='mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 pr-14'>
                <div className='h-[383px] bg-white shadow flex items-center justify-center'>
                    <h1>Recent Transfers</h1>
                </div>
                <div className='h-[383px] bg-white shadow flex items-center justify-center'>
                    <h1>Recent Purchases</h1>
                </div>
            </div>
        </>
    )
}

export default Card4