import React from 'react'

function AssetTable() {
    return (
        <>
            <div className='mt-5'>
                <table className='h-[595px] w-[1100px] bg-white shadow'>
                    <thead>
                        <tr className=''>
                            <th ><h1 className='text-xl font-semibold bg-gray-100 p-3'>Name</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>Type</h1></th>
                            <th ><h1 className='text-xl font-semibold bg-gray-100 p-3'>Base</h1></th>
                            <th ><h1 className='text-xl font-semibold bg-gray-100 p-3'>Available</h1></th>
                            <th ><h1 className='text-xl font-semibold bg-gray-100 p-3'>Assigned</h1></th>
                            <th> <h1 className='text-xl font-semibold bg-gray-100 p-3'>Status</h1></th>
                            <th> <h1 className='text-xl font-semibold bg-gray-100 p-3'>Actions</h1></th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AssetTable